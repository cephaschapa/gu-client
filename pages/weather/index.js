import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottonNavBar'
import Header from '../../components/Header'
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import axios from 'axios'
import moment from 'moment'
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, ChevronLeftIcon, ClockIcon, CloudIcon, CollectionIcon, ExclamationCircleIcon, LocationMarkerIcon, MicrophoneIcon, SaveIcon, SearchIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import WeatherCard from '../../components/WeatherCard'
import cities from 'cities.json'

const API_KEY = "6082c815ee7a42b5994518e03b5c0e68"
function Home() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [location, setLocation] = useState([])
    const [day, setDay] = useState(1)
    const [current, setCurrent] = useState(0)
    const router = useRouter()
    const [overlay, setOverlay] = useState(false)
    const [error,setError] = useState('')
    const [query, setQuery] = useState('')
    const [err, setErr] =  useState(false)
    
    // const [result, setResult] = useState('')
    let [color, setColor] = useState("#16a085");
    // console.log(cities)
    let result = ''
    let city_ = ''
    
    useEffect(() => {
        
    },[])
    cities.forEach(el=> {
        if(el.name === query){
            // setResult(el.name)
            city_ = el.name

            result = <> <LocationMarkerIcon className="h-6 w-6"/> {el.name}, {el.country} </>
            console.log(el)
            console.log(city_)
        } else{    
    } })

    useEffect(() => {
    
        var options = { 
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          let cords = []
          let latitude = ''
          let longitude = ''
          function success(pos) {
            let crd =  pos.coords;
           
            latitude = crd.latitude
            longitude = crd.longitude;
            
            setLocation(crd)
            axios.get('https://api.ipify.org?format=json').then(result => {
            let ip = result.data.ip
            if(ip){
                axios.get(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`,{
                    headers: {
                        'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com',
                        'x-rapidapi-key': 'fee96f23c6msh365b9b203912988p1232dejsn23884fec28e3'
                    }}).then(result => {
                   
                    let response = result.data
                    let loc = {city:response.city.name, country:response.country.name}
                    console.log(loc)
                    setLocation(loc)
                    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${API_KEY}`).then(response=>{
                        setData(response.data)
                    }).catch(error => {
                        //   alert(error.message)
                        setError(error.message)
                    })
                })
                console.log(ip)
            }

            })
          } 
          
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            // alert('You wont be ablbe to access weather data.')
            setErr(true)
          } 

         navigator.geolocation.getCurrentPosition(success, error, options);
       
    },[])
    useEffect(() => {
        const date = new Date()
        const dayofweek = date.getDay()
        console.log(date.getDay())
        console.log(dayofweek)
        setCurrent(dayofweek)
        setDay(dayofweek)
        
    },[])

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: #16a085;
        `;
    // PuffLoader
    if(error) {
        return <div className="flex flex-col space-y-3 items-center justify-center h-screen w-screen text-center p-4">
            <ExclamationCircleIcon className="h-10 w-10"/>
            <p>Opps... we are having trouble connecting please check your internet connection</p>
            <button onClick={() =>router.reload()} className="bg-green-600 px-4 p-3 rounded-full text-white">Reload Page</button>
        </div>;
    }
    if(!data) {
        return <div className="flex flex-col justify-center h-screen w-full items-center">
                    
                    {
                        !err? <>
                                <p className="text-3xl text-green-500">Greenupp Weather</p>
                                <p className="text-center mb-10 text-gray-500">Precision Weather</p>
                                <PuffLoader color={color} loading={loading} css={override} size={60} /></>:
                                <>   <ExclamationCircleIcon className="h-10 w-10 text-green-600"/>
                                    <p className="text-gray-400 text-center p-2">This service requires location to be on. Please allow or turn on your location.</p> 
                                 </>
                    }
                </div>
    }
    
    return (
        <div className="main">
            <Head>
                <title>Greenupp | Precision Weather</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="flex justify-center items-center h-screen">
                {
                    overlay? 
                        <div className="fixed top-0 h-screen z-40 w-full bg-white backdrop-filter backdrop-blur-md bg-opacity-30 p-4">
                            <div className="relative top-52  space-y-2">
                                <p className="font-bold">Search Results</p>
                                <Link href={`weather/c?city=${city_}`}> 
                                    <div className="flex space-x-3">
                                        {result}
                                    </div>
                                </Link>
                            </div>
                        </div>: null
                }
                <div className="flex flex-col h-screen w-full relative pt-20 px-4 space-y-5">
                    <p className="text-3xl">Hi Moono!</p>
                    {
                        overlay ? 
                        <div className="flex fixed items-center justify-between w-full top-16 z-40 pr-8">
                            <p className="text-3xl text-gray-500">Search Location</p>
                            <XIcon onClick={() =>{setOverlay(false);}} className="h-8 w-8" />
                        </div>:null
                    }
                    <div className={`${overlay? "fixed top-32": ''} flex sticky top-0 text-center w-full border-2 border-gray-200 z-40 p-4 rounded-full`}>
                        <SearchIcon className={`${overlay? 'z-50': ''} "h-6 w-6 text-gray-500 z-50"`}/>
                        <input 
                            value={query}
                            onChange={(e)=>{
                                setQuery(e.target.value)
                            }}
                            type="search" onClick={()=>{
                            setOverlay(true)
                            // console.log(overlay)
                        }} placeholder={location.city + ", " + location.country} className="w-full outline-none px-2 bg-transparent"/>
                        <MicrophoneIcon className="h-6 w-6 text-gray-500"/>
                    </div>
                   
                    <div className="">
                        {/* Sunday */}
                        {day==0?<WeatherCard day="Sunday" data={data} location={location} current={0}/>: null}
                        {/* Monday */}
                        {day==1?<WeatherCard day="Monday" data={data} location={location} current={1}/>: null}
                        {/* Tuesday */}
                        {day==2?<WeatherCard day="Tuesday" data={data} location={location} current={2}/>: null}
                        {/* Wednesday */}
                        {day==3? <WeatherCard day="Wednesday" data={data} location={location} current={3}/>: null}
                        {/* Thursday */}
                        {day==4?<WeatherCard day="Thurday" data={data} location={location} current={4}/>: null}
                        {/* Friday */}
                        {day==5?<WeatherCard day="Friday" data={data} location={location} current={5}/>: null}
                        {/* Saturday */}
                        {day==6?<WeatherCard day="Saturday" data={data} location={location} current={6}/>: null}
                        <div className={`flex overflow-auto scrollbar-none scrollbar-thumb-gray-900 scrollbar-track-gray-100 mt-4 drop-shadow-md overflow-ellipsis`}>
                            <div onClick={
                                () =>{ setDay(0)}
                            } className={`${day==0? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Sun</div>
                            <div onClick={
                                () => { setDay(1)}
                            } className={`${day==1? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Mon</div>
                            <div onClick={
                                () => { setDay(2)}
                            } className={`${day==2? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Tue</div>
                            <div onClick={
                                () => { setDay(3)}
                            } className={`${day==3? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Wed</div>
                            <div onClick={
                                () => { setDay(4)}
                            } className={`${day==4? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Thu</div>
                            <div onClick={
                                () => setDay(5)
                            } className={`${day==5? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Fri</div>
                            <div onClick={
                                () => setDay(6)
                            } className={`${day==6? 'bg-gray-200 p-4 rounded-full ':' p-4 font-bold'} font-bold text-sm  `}>Sat</div>
                        </div>
                        <div className="py-6">
                            <div className="flex w-full justify-between py-4">
                                <p className="text-xl font-bold">Popular Locations</p>
                                <p className="text-xl">View All</p>
                            </div>
                            <div className="py-3">
                                <div className="flex w-full items-center space-x-2 overflow-auto scrollbar-none" >
                                    <div className="flex justify-between px-4 items-center h-32 w-3/4 bg-gray-100 rounded-2xl">
                                        <div className="flex flex-col space-y-3 items-start">
                                            <div className="text-3xl"><span className="font-bold text text-gray-700">{Math.ceil(data?.current.temp-273.15)}</span><sup>o</sup>C <span className="text-sm">Cloudy</span></div>
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Lusaka,</span> Zambia</div>
                                        </div>
                                        <div className="">
                                            <SunIcon className="h-20 w-20 text-yellow-300 "/>
                                        </div>                  
                                    </div>
                                    <div className="flex justify-between px-4 items-center h-32 w-3/4 bg-gray-100 rounded-2xl">
                                        <div className="flex flex-col space-y-3 items-start">
                                            <div className="text-3xl"><span className="font-bold text text-gray-700">27</span><sup>o</sup>C <span className="text-sm">Sunny</span></div>
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Lusaka,</span> Zambia</div>
                                        </div>
                                        <div className="">
                                            <SunIcon className="h-20 w-20 text-gray-700"/>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="flex w-full items-center space-x-2 overflow-auto scrollbar-none">
                                    <div className="flex justify-between px-4 items-center h-32 w-3/4 bg-gray-100 rounded-2xl">
                                        <div className="flex flex-col space-y-3 items-start">
                                            <div className="text-3xl"><span className="font-bold text text-gray-700">25</span><sup>o</sup>C <span className="text-sm">Sunny</span></div>
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Livingstone,</span> Zambia</div>
                                        </div>
                                        <div className="">
                                            <SunIcon className="h-20 w-20 text-gray-700"/>
                                        </div>                  
                                    </div>
                                    <div className="flex justify-between px-4 items-center h-32 w-3/4 bg-gray-100 rounded-2xl">
                                        <div className="flex flex-col space-y-3 items-start">
                                            <div className="text-3xl"><span className="font-bold text text-gray-700">24</span><sup>o</sup>C <span className="text-sm">Sunny</span></div>
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Kitwe,</span> Zambia</div>
                                        </div>
                                        <div className="">
                                            <SunIcon className="h-20 w-20 text-gray-700"/>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <nav className="">
            <BottomNavBar />
            </nav> 
        </div>
    )
}

export default Home

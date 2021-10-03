import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottonNavBar'
import Header from '../../components/Header'
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import axios from 'axios'
import moment from 'moment'
import { ArrowLeftIcon, BookmarkIcon, ChevronLeftIcon, ClockIcon, CloudIcon, LocationMarkerIcon, SaveIcon, SearchIcon, SunIcon } from '@heroicons/react/outline'

const API_KEY = "6082c815ee7a42b5994518e03b5c0e68"
function Home() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [location, setLocation] = useState()
    const [day, setDay] = useState(1)
    const [current, setCurrent] = useState(0)
    let [color, setColor] = useState("#16a085");

    useEffect(() => {})

    useEffect(() =>{
        setInterval(() => {
            setLoading(false)
        }, 3000)
    })

    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then( response  => {
            console.log("Country is : ", response);
            setLocation(response)
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lat}&exclude=minutely,hourly&appid=${API_KEY}`).then(response=>{
              console.log(response.data.daily[1].weather[0].icon)
              console.log(response)
              setData(response.data)
          })
            
        })
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
    return (
        <div className="main">
            <Head>
                <title>Greenupp | Precision Weather</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loading? "": <Header />}
            <section className="flex justify-center items-center h-screen">
                {
                    loading ? <div className="flex flex-col justify-center">
                    <p className="text-3xl text-green-500">Greenupp Weather</p>
                    <p className="text-center mb-10 text-gray-500">Precision Weather</p>
                    <PuffLoader color={color} loading={loading} css={override} size={60} />
                </div>:
                <div className="flex flex-col h-screen w-full relative pt-20 px-4 space-y-5">
                    <p className="text-3xl">Hi Moono!</p>
                    <div className="flex sticky top-0 text-center w-full border-2 border-gray-200 p-4 rounded-full">
                        <SearchIcon className="h-6 w-6 text-gray-500"/>
                        <input type="search" placeholder="Search City" className="w-full outline-none px-2"/>
                    </div>
                    <div className="">
                        {/* <Link href="weather/detailed"> */}
                            {/* Sunday */}
                            {day==0?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                                
                            { //data.current.weather[0].icon
                                   current==0? <>
                                   <div className="flex justify-center items-center">
                                       {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                       <div className="flex items-center">
                                           
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 font-bold">
                                            <p>Sunday</p>
                                            <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                        </div>
                                        <div className="flex flex-col space-y-3 items-end">
                                            <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                            <div className="flex flex-col justify-end items-end space-y-1">
                                                <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                                <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                            </div>
                                        </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                            {data? <Image src={`/icons/${data.daily[0].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                            <div className="flex items-center">
                                                
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 font-bold">
                                            <p>Sunday</p>
                                            <span className="text-xs font-normal">{data.daily[0].weather[0].description}</span>
                                        </div>
                                        <div className="flex flex-col space-y-3 items-end">
                                            <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[0].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[0].temp.max-273.15)}</span><sup>o</sup>C </div>
                                            <div className="flex flex-col justify-end items-end space-y-1">
                                                <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                                <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[0].dt).fromNow()}</div>
                                            </div>
                                        </div>
                                    {/*  */}
                                    
                                    </>
                                }                  
                            </div>: null}

                            {/* Monday */}
                        
                            {day==1?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                                { //data.current.weather[0].icon
                                    current==1? <>
                                        <div className="flex justify-center items-center">
                                            {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                            <div className="flex items-center">
                                                
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 font-bold">
                                            <p>Monday</p>
                                            <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                        </div>
                                        <div className="flex flex-col space-y-3 items-end">
                                            <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                            <div className="flex flex-col justify-end items-end space-y-1">
                                                <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                                <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                            </div>
                                        </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                            {data? <Image src={`/icons/${data.daily[1].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                            <div className="flex items-center">
                                                
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 font-bold">
                                            <p>Monday</p>
                                            <span className="text-xs font-normal">{data.daily[1].weather[0].description}</span>
                                        </div>
                                        <div className="flex flex-col space-y-3 items-end">
                                            <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[1].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[1].temp.max-273.15)}</span><sup>o</sup>C </div>
                                            <div className="flex flex-col justify-end items-end space-y-1">
                                                <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                                <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[1].dt).fromNow()}</div>
                                            </div>
                                        </div>
                                    {/*  */}
                                    
                                    </>
                                }
                                                  
                            </div>: null}

                        {/* Tuesday */}
                        {day==2?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                                
                        { //data.current.weather[0].icon
                                    current==2? <>
                                       <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Tuesday</p>
                                        <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                        </div>
                                    </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.daily[2].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Tuesday</p>
                                        <span className="text-xs font-normal">{data.daily[2].weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[2].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[2].temp.max-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[2].dt).fromNow()}</div>
                                        </div>
                                    </div>

                                    {/*  */}
                                    
                                    
                                    </>
                                }               
                            </div>: null}
                            {/* Wednesday */}
                            {day==3?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                            { //data.current.weather[0].icon
                                    current==3? <>
                                       <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Wednesday</p>
                                        <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                        </div>
                                    </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.daily[3].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Wednesday</p>
                                        <span className="text-xs font-normal">{data.daily[3].weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[3].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[2].temp.max-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[3].dt).fromNow()}</div>
                                        </div>
                                    </div>

                                    {/*  */}
                                    
                                    
                                    </>
                                }                   
                            </div>: null}
                        {/* Thursday */}
                        {day==4?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                                
                        { //data.current.weather[0].icon
                                    current==4? <>
                                       <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Thursday</p>
                                        <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                        </div>
                                    </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.daily[4].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Thursday</p>
                                        <span className="text-xs font-normal">{data.daily[4].weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[4].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[4].temp.max-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[4].dt).fromNow()}</div>
                                        </div>
                                    </div>

                                    {/*  */}
                                    
                                    
                                    </>
                                }                    
                        </div>: null}
                        {/* Friday */}
                        {day==5?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                            
                        { //data.current.weather[0].icon
                                    current==5? <>
                                       <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Friday</p>
                                        <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                        </div>
                                    </div>
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.daily[5].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Friday</p>
                                        <span className="text-xs font-normal">{data.daily[5].weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[5].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[5].temp.max-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[5].dt).fromNow()}</div>
                                        </div>
                                    </div>

                                    {/*  */}
                                    
                                    
                                    </>
                                }    
                        </div>: null}
                        {/* Saturday */}
                        {day==6?<div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
                            
                        { //data.current.weather[0].icon afadfa dfdf
                                    current==6? <>
                                       <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.current.weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Saturday</p>
                                        <span className="text-xs font-normal">{data.current.weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-4xl text-gray-600"><span className="font-bold text-gray-600">{ Math.ceil(data.current.temp-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.current.dt).fromNow()}</div>
                                        </div>
                                    </div> 
                                    </>: <>
                                    <div className="flex justify-center items-center">
                                        {data? <Image src={`/icons/${data.daily[6].weather[0].icon}.png`} height={80} width={80}/>:<CloudIcon className="h-20 w-20 text-gray-700"/>}
                                        <div className="flex items-center">
                                            
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 font-bold">
                                        <p>Saturday</p>
                                        <span className="text-xs font-normal">{data.daily[6].weather[0].description}</span>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-end">
                                        <div className="text-2xl text-gray-600"><span className="font-bold text-blue-600">{ Math.ceil(data.daily[6].temp.min-273.15)}</span><sup>o</sup>C <span className="font-bold text-yellow-600">{ Math.ceil(data.daily[6].temp.max-273.15)}</span><sup>o</sup>C </div>
                                        <div className="flex flex-col justify-end items-end space-y-1">
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">{location.region},</span> {location.country}</div>
                                            <div className="flex space-x-2 text-xs  items-center text-gray-400"><ClockIcon className="h-3 w-3"/><span className="font-bold pr-2">Updated -</span>{moment.unix(data.daily[6].dt).fromNow()}</div>
                                        </div>
                                    </div>

                                    {/*  */}
                                    
                                    
                                    </>
                                }             
                        </div>: null}
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
                                            <div className="text-3xl"><span className="font-bold text text-gray-700">19</span><sup>o</sup>C <span className="text-sm">Cloudy</span></div>
                                            <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Lusaka,</span> Zambia</div>
                                        </div>
                                        <div className="">
                                            <CloudIcon className="h-20 w-20 text-gray-700"/>
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
                }
            </section>
            <nav className="">
            {loading? "": <BottomNavBar />}
            </nav> 
        </div>
    )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import BottomNavBar from '../../components/BottonNavBar'
import Header from '../../components/Header'
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import { ArrowLeftIcon, BookmarkIcon, ChevronLeftIcon, CloudIcon, LocationMarkerIcon, SaveIcon, SearchIcon, SunIcon } from '@heroicons/react/outline'
function Home() {
    const [loading, setLoading] = useState(true)
    let [color, setColor] = useState("#16a085");

    useEffect(() =>{
        setInterval(() => {
            setLoading(false)
        }, 3000)
    })

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
            <Header />
            <section className="flex justify-center items-center h-screen">
                {
                    loading ? <div className="flex flex-col justify-center">
                    <p className="text-3xl text-green-500">Greenupp Weather</p>
                    <p className="text-center mb-10 text-gray-500">Precision Weather</p>
                    <PuffLoader color={color} loading={loading} css={override} size={60} />
                </div>:
                <div className="flex flex-col h-screen w-full relative pt-20 px-4 space-y-5">
                    <p className="text-3xl">Hi Moono!</p>
                    <div className="flex text-center w-full border-2 border-gray-200 p-4 rounded-full">
                        <SearchIcon className="h-6 w-6 text-gray-500"/>
                        <input type="search" placeholder="Search City" className="w-full outline-none px-2"/>
                    </div>
                    <div className="">
                        <Link href="weather/detailed">
                            <div className="flex justify-between px-4 items-center h-32 w-full bg-gray-100 rounded-2xl">
                                <div className="">
                                    <CloudIcon className="h-20 w-20 text-gray-700"/>
                                </div>
                                <div className="flex flex-col space-y-3 items-end">
                                    <div className="text-3xl"><span className="font-bold text text-gray-700">19</span><sup>o</sup>C</div>
                                    <div className="flex space-x-2"><LocationMarkerIcon className="h-6 w-6"/><span className="font-bold pr-2">Lusaka,</span> Zambia</div>
                                </div>                  
                            </div>
                        </Link>
                        <div className="flex overflow-auto mt-4 drop-shadow-md overflow-ellipsis">
                            <div className="text-sm p-4 font-bold">Sun</div>
                            <div className="text-sm bg-gray-200 p-4 rounded-full px-8 font-bold">Mon</div>
                            <div className="text-sm p-4 font-bold">Tue</div>
                            <div className="text-sm p-4 font-bold">Wed</div>
                            <div className="text-sm p-4 font-bold">Thu</div>
                            <div className="text-sm p-4 font-bold">Fri</div>
                            <div className="text-sm p-4 font-bold">Sat</div>
                        </div>
                        <div className="py-6">
                            <div className="flex w-full justify-between py-4">
                                <p className="text-xl font-bold">Popular Locations</p>
                                <p className="text-xl">View All</p>
                            </div>
                            <div className="py-3">
                                <div className="flex w-full items-center space-x-2 overflow-auto">
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
                                <div className="flex w-full items-center space-x-2 overflow-auto">
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
                <BottomNavBar />
            </nav> 
        </div>
    )
}

export default Home

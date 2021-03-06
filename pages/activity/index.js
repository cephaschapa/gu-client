import Head from 'next/head'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import Router,{useRouter} from 'next/router'
import { useState, useEffect} from 'react'
import Header from '../../components/Header'
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import { AdjustmentsIcon, ChartBarIcon, ChatAltIcon, DotsHorizontalIcon, DotsVerticalIcon, HeartIcon, NewspaperIcon, PaperAirplaneIcon, PaperClipIcon, PhotographIcon, PlusIcon, RefreshIcon, ShareIcon, TrendingUpIcon, UserIcon, ViewListIcon } from '@heroicons/react/outline'
import NewsCard from '../../components/NewsCard'
// import NewsCrawler from 'news-crawler'

function Activity() {
    // console.log(NewsCrawler)
    const [loading, setLoading] = useState(true)
    const [tab, setTab] = useState(1)
    let [color, setColor] = useState("#16a085");
    const router = useState()
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
    if(loading) {
        return (
            <div className="flex flex-col h-screen w-full items-center justify-center">
                <p className="text-3xl text-green-500">Greenupp Feeds</p>
                <p className="text-center mb-10 text-gray-500">Precise information</p>
                <PuffLoader color={color} loading={loading} css={override} size={60} />
            </div>
        )
    }

    

    return (
        <div className="main">
            <Head>
                <title>Greenupp | Activity and Feeds</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="flex space-y-3 flex-col h-screen pt-20">
                {/* <p className="text-3xl">Feed</p>
                <div className="bg-gray-100 h-auto w-full rounded-2xl p-2 space-y-2">
                    <p className="">Share your thoughts</p>
                    <div className="bg-white rounded-2xl">
                        <form className="">
                            <textarea type="text" className="w-full outline-none bg-transparent p-2 " placeholder=""></textarea>
                        </form>
                        
                    </div>
                    <div className="flex">
                        <div className="flex space-x-2 w-full p-2">
                            <button className=""><PhotographIcon className="h-6 w-6 text-green-600"/></button>
                            <button className=""><PaperClipIcon className="h-6 w-6 text-green-600"/></button>
                        </div>
                        <div className="flex space-x-2 p-2">
                            <button className="bg-green-600 px-6 py-3 rounded-2xl text-white">Post</button>
                        </div>
                    </div>
                    
                </div> */}
                <div className="fixed border-b border-gray-300 pb-3 w-full bg-white z-20 top-16">
                    <div className="flex w-full justify-between space-x-1 p-2 pointer-events-auto ">
                        <button onClick={() => {
                            setTab(0)
                        }} className={`${tab == 0? "bg-green-600 text-white":"bg-gray-200 text-green-600"} flex justify-center space-x-1  p-2 rounded-full text-white text-sm items-center"`}><ViewListIcon className="h-6 w-6"/> <span>Posts</span></button>
                        <button onClick={() => {
                            setTab(1)
                        }} className={`${tab == 1? "bg-green-600 text-white":"bg-gray-200 text-green-600"} flex justify-center space-x-1  p-2 rounded-full text-white text-sm items-center"`}><NewspaperIcon className="h-6 w-6"/><span>News</span></button>
                        <button onClick={() => {
                            setTab(2)
                        }} className={`${tab == 2? "bg-green-600 text-white":"bg-gray-200 text-green-600"} flex justify-center space-x-1  p-2 rounded-full text-white text-sm items-center"`}><UserIcon className="h-6 w-6"/> <span>People</span></button>
                        <button onClick={() => {
                            setTab(3)
                        }} className={`${tab == 3? "bg-green-600 text-white":"bg-gray-200 text-green-600"} flex justify-center space-x-1  p-2 rounded-full text-white text-sm items-center"`}><TrendingUpIcon className="h-6 w-6"/> <span>Trending</span></button>
                    </div>
                    {
                        tab==0? <>
                            <div className="flex space-x-2 overflow-y-auto w-full h-auto relative scrollbar-none stories">
                                <div className="">
                                    <div className="bg-green-600 relative h-16 w-16 rounded-full border-4 border-green-600 items-center justify-center">
                                        <Image src="/bg.jpg" objectFit="cover" layout="fill" className="rounded-full"/>
                                        <div className="flex justify-center items-center w-full h-full z-10 relative">
                                            <PlusIcon className="h-8 w-8 bg-green-600 p-2  rounded-full text-white"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/b2.jpg" objectFit="cover" layout="fill" className="rounded-full"/>
            
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/b1.jpg" objectFit="cover" layout="fill" className="rounded-full"/>
                                        
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/detailed-bg.jpg" objectFit="cover" layout="fill" className="rounded-full"/>
                                        
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/svg.png" objectFit="cover" layout="fill" className="rounded-full"/>
                                        
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/svg.png" objectFit="cover" layout="fill" className="rounded-full"/>
                                        
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-green-600 h-16 w-16 rounded-full relative border-4 border-green-600 items-center justify-center">
                                        <Image src="/svg.png" objectFit="cover" layout="fill" className="rounded-full"/>
                                        
                                    </div>
                                </div>
                            </div>
                        </>:null
                    }
                </div>
                {/* Posts */}
                {tab == 0? <>
                    <div className="flex flex-col w-screen h-full space-y-2 pt-24 pb-20 overflow-auto sc">
                        <div onClick={()=>setToggleNotifications(false)} className="flex fixed bottom-20 right-2 transition duration-200 shadow-xl float-right  items-center justify-center h-16 w-16 rounded-full bg-green-600 z-20">
                            <PlusIcon className="h-6 w-6 text-white"/>
                        </div>
                        {/* Stories */}
                        
                        {/* Posts */}
                        <div className="pt-2 space-y-2">
                            <div className="h-auto w-auto bg-gray-50 p-2 border-1 border-gray-100 shadow-sm rounded-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-1 items-center">
                                        <div className="bg-green-600 h-12 w-12 rounded-full relative items-center justify-center">
                                            <Image src="/svg.png" objectFit="cover" layout="fill" className="rounded-full"/>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold">Cephas Salah</p>
                                            <p className="text-sm">about an hour ago</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <DotsHorizontalIcon className="h-6 w-6" />
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="space-y-1">
                                    <p>Farming Rocks ????</p>
                                    <div className="relative h-52 w-full">
                                        <Image src="/b1.jpg" objectFit="cover" layout="fill" className="rounded-2xl"/>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="p-2 flex justify-between text-gray-700">
                                    <div className="flex items-center space-x-1">
                                        <HeartIcon className="h-6 w-6"/>
                                        <p className="text-sm">1.1K</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ChatAltIcon className="h-6 w-6"/>
                                        <p className="text-sm">400</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <RefreshIcon className="h-6 w-6 space-x-1"/>
                                        <p className="text-sm">49</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ShareIcon className="h-6 w-6"/>
                                        <p className="text-sm">690</p>
                                    </div>
                                </div>
                                {/* Thread */}
                                <div className="">

                                </div>
                                
                            </div>
                            {/* --- */}
                            <div className="h-auto w-auto bg-gray-50 p-2 border-1 border-gray-100 shadow-sm rounded-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-1 items-center">
                                        <div className="bg-green-600 h-12 w-12 rounded-full relative items-center justify-center">
                                            <Image src="/sp.jpg" objectFit="cover" layout="fill" className="rounded-full"/>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold">Elon Musk</p>
                                            <p className="text-sm">10 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <DotsHorizontalIcon className="h-6 w-6" />
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="space-y-1">
                                    <p>How SpaceX plans to use Greenupp to grow food on Mars. <span className="text-green-600">@cephaschapa @mars @Orion_technologies</span></p>
                                    <div className="relative h-52 w-full">
                                        <Image src="/sp (2).jpg" objectFit="cover" layout="fill" className="rounded-2xl"/>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="p-2 flex justify-between text-gray-700">
                                    <div className="flex items-center space-x-1">
                                        <HeartIcon className="h-6 w-6"/>
                                        <p className="text-sm">1.1K</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ChatAltIcon className="h-6 w-6"/>
                                        <p className="text-sm">400</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <RefreshIcon className="h-6 w-6 space-x-1"/>
                                        <p className="text-sm">49</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ShareIcon className="h-6 w-6"/>
                                        <p className="text-sm">690</p>
                                    </div>
                                </div>
                                {/* Thread */}
                                <div className="">
                                    
                                </div>
                                
                            </div>
                            {/*  */}
                            <div className="h-auto w-auto bg-gray-50 p-2 border-1 border-gray-100 shadow-sm rounded-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-1 items-center">
                                        <div className="bg-green-600 h-12 w-12 rounded-full relative items-center justify-center">
                                            <Image src="/sp (1).jpg" objectFit="cover" layout="fill" className="rounded-full"/>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold">Greenupp Technologies</p>
                                            <p className="text-sm">10 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <DotsHorizontalIcon className="h-6 w-6" />
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="space-y-1">
                                    <p>Its comfirmed !!! ???????????? We are going to mars. <span className="text-green-600">@cephaschapa @mars @Orion_technologies</span></p>
                                    <div className="relative h-52 w-full">
                                        <Image src="/sp (2).jpg" objectFit="cover" layout="fill" className="rounded-2xl"/>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="p-2 flex justify-between text-gray-700">
                                    <div className="flex items-center space-x-1">
                                        <HeartIcon className="h-6 w-6"/>
                                        <p className="text-sm">1.1K</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ChatAltIcon className="h-6 w-6"/>
                                        <p className="text-sm">400</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <RefreshIcon className="h-6 w-6 space-x-1"/>
                                        <p className="text-sm">49</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ShareIcon className="h-6 w-6"/>
                                        <p className="text-sm">690</p>
                                    </div>
                                </div>
                                {/* Thread */}
                                <div className="">
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                </>:null}
                {
                    tab == 1? <>
                        <p className="pt-10 text-xl p-2"></p>
                        {/* News posts */}
                        <NewsCard image="/bg.jpg" icon="/bg.jpg" source="Climate Analysis" title="How climate has negatively affected farming"/>
                        <NewsCard image="/b1.jpg" icon="/b1.jpg" source="IoTex" title="Blockchain and Supply Chain"/>
                        <NewsCard image="/b2.jpg" icon="/bg.jpg" source="Greenupp" title="How to farm in the 21 centuary"/>
                        <NewsCard image="/sp.jpg" icon="/sp (1).jpg" source="Greenupp" title="Greenupp sends satellite on SpaceX startship rocket."/>
                        <NewsCard image="/bg.jpg" icon="/bg.jpg" source="Climate Analysis" title="How climate has negatively affected farming"/>
                        <NewsCard image="/bg.jpg" icon="/bg.jpg" source="Climate Analysis" title="How climate has negatively affected farming"/>
                    </>:null
                }
                
            </section>
            <nav className="">
                <BottomNavBar />
            </nav> 
        </div>
    )
}

export default Activity

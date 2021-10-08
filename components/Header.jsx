import React, {useEffect,useState} from 'react';
import {  BellIcon, ChatIcon, ClockIcon, CloudIcon, CogIcon, DotsVerticalIcon, HashtagIcon, MenuAlt1Icon, ShoppingBagIcon, ShoppingCartIcon, SupportIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import {BadgeCheckIcon} from '@heroicons/react/solid'
import Link from 'next/link';
function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleNotifications, setToggleNotifications] = useState()
    const handleToggle = () => {
        // alert(toggleMenu)
        if (!toggleMenu){
            setToggleMenu(true)
        } else {
            setToggleMenu(false)
        }
        
    }
    const handleNotifications = () => {
        // alert(toggleMenu)
        if (!toggleNotifications){
            setToggleNotifications(true)
        } else {
            setToggleNotifications(false)
        }
        
    }
    return (
        <div className="">
            <header className="flex  shadow-md items-center p-4 px-2 py-8 h-12 w-full bg-white fixed top-0 justify-between text-gray-600 z-50">
                <div className="p-2 flex items-center justify-center rounded-full space-x-2">
                    <UserIcon className="h-9 w-9 rounded-full bg-gray-600 text-white p-1"/>
                    <p className="font-bold">Cephas Chapa (I am)</p>
                    <BadgeCheckIcon className="h-5 w-5  rounded-full text-green-600"/>
                </div>
                <div className="flex space-x-4">
                    
                    <div onClick={handleNotifications} className="rounded-full">
                        <div className="rounded-full h-3 w-3 bg-green-600 absolute ml-4 border-2 border-white"></div>
                        <BellIcon className="h-8 w-8"/>
                    </div>
                    <div onClick={handleToggle} className="rounded-full">
                        <DotsVerticalIcon className="h-8 w-8"/>
                    </div>
                </div>
                <div className={`${toggleMenu ? 'h-32 w-32 block backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white shadow-md z-50 absolute right-4  px-5 top-12 rounded-2xl py-4':'hidden'}`}>
                    <ul className="space-y-3 ">
                        <button className="w-full text-right font-bold">Account</button>
                        <button className="w-full text-right font-bold">Settings</button>
                        <button className="w-full text-right font-bold">Help</button>
                    </ul>
                </div>
                <div className={`${toggleNotifications ? 'w-screen h-screen backdrop-filter backdrop-blur-md bg-opacity-30 bg-white shadow-md z-50 absolute  px-5 top-0 left-0 rounded-2xl py-4  overflow-auto':'hidden'}`}>
                    <ul className="space-y-3">
                        <p className="text-2xl font-bold">Notifications</p>
                        <p className="text-xl">Today</p>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                <div className="rounded-full h-3 w-3 bg-yellow-600  border-2 border-white"></div>
                                    {/* <p><CloudIcon className="h-4 w-4"/></p> */}
                                    <p className="">Greenupp Weather</p>
                                    
                                    <p className="font-normal">Just now</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>Severe heat wave in Lusaka this afternoon, please avoid direct sunlight. Stay safe drink lots of water.</p>
                            </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                {/* <div className="rounded-full h-3 w-3 bg-green-600  border-2 border-white"></div> */}
                                    <p><ChatIcon className="h-4 w-4"/></p>
                                    <p className="">Greenupp Messenger</p>
                                    
                                    <p className="font-normal">2 minutes ago</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>New message from Cephas Chapa</p>
                            </div>
                            <div className="flex w-full justify-around py-2 px-10">
                                <Link href="chat/"><button className="rounded-full bg-green-600 text-white p-2 px-4">Read</button></Link>
                                <button className="rounded-full bg-gray-600 text-white p-2 px-4">Ignore</button>
                            </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                {/* <div className="rounded-full h-3 w-3 bg-green-600  border-2 border-white"></div> */}
                                    <p><ShoppingBagIcon className="h-4 w-4"/></p>
                                    <p className="">Greenupp Store</p>
                                    
                                    <p className="font-normal">10 minutes ago</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>New products uploaded to the store. Get them first</p>
                            </div>
                            <div className="flex w-full justify-around py-2 px-10">
                                <button className="rounded-full bg-green-600 text-white p-2 px-4">Shop</button>
                            </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                {/* <div className="rounded-full h-3 w-3 bg-green-600  border-2 border-white"></div> */}
                                    <p><ShoppingBagIcon className="h-4 w-4"/></p>
                                    <p className="">Greenupp Store</p>
                                    
                                    <p className="font-normal">10 minutes ago</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>Your order is being processed. Delivery time is 30 minutes.</p>
                            </div>
                            <div className="flex w-full justify-around py-2 px-10">
                                <button className="rounded-full bg-green-600 text-white p-2 px-4">Track Order</button>
                            </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                {/* <div className="rounded-full h-3 w-3 bg-green-600  border-2 border-white"></div> */}
                                    <p><HashtagIcon className="h-4 w-4"/></p>
                                    <p className="">Greenupp Activities</p>
                                    
                                    <p className="font-normal">10 minutes ago</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>Kate Mbinji commented on your photo</p>
                            </div>
                            <div className="flex w-full justify-around py-2 px-10">
                            <Link href="activity/"><button className="rounded-full bg-green-600 text-white p-2 px-4">Read</button></Link>
                                <button className="rounded-full bg-gray-600 text-white p-2 px-4">Ignore</button>
                            </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-2xl w-full h-auto">
                            {/* Notification Header */}
                            <div className="flex space-x-1  items-center text-sm">
                                
                                <div className="flex w-full font-bold items-center space-x-2">
                                {/* <div className="rounded-full h-3 w-3 bg-green-600  border-2 border-white"></div> */}
                                    <p><HashtagIcon className="h-4 w-4"/></p>
                                    <p className="">Greenupp Activities</p>
                                    
                                    <p className="font-normal">12 minutes ago</p>
                                </div>
                                <div className="flex justify-end items-center w-10"><XIcon className="h-4 w-4 relative right-0"/></div>
                            </div>
                            {/* Body */}
                            <div className="">
                                <p>Kate Mbinji commented on your photo</p>
                            </div>
                            <div className="flex w-full justify-around py-2 px-10">
                            <Link href="activity/"><button className="rounded-full bg-green-600 text-white p-2 px-4">Read</button></Link>
                                <button className="rounded-full bg-gray-600 text-white p-2 px-4">Ignore</button>
                            </div>
                        </div>
                    </ul>
                    <div onClick={()=>setToggleNotifications(false)} className="flex bottom-20 transition duration-200 shadow-xl float-right sticky items-center justify-center h-12 w-12 rounded-full bg-green-600">
                        <XIcon className="h-9 w-9 text-white"/>
                    </div>
                </div>
            </header>
            
        </div>
        
    )
}

export default Header

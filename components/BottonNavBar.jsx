import { useState, useEffect } from 'react'

import {useRouter} from 'next/router'
import { BellIcon, ChatIcon, CubeIcon, CubeTransparentIcon, HashtagIcon, ShoppingBagIcon, SunIcon, ViewGridAddIcon, ViewGridIcon } from '@heroicons/react/outline'

const BottomNavBar = () =>{
    const router = useRouter()
    // console.log(router.pathname)
    const path = router.pathname
    return (
        <div className="flex bottom-0 bg-white border-t border-gray-200 h-16 w-full left-0 items-center justify-around p-4 fixed z-40">
            <div className="flex flex-col items-center">
                <CubeTransparentIcon
                    className="h-6 w-6 text-gray-500 "
                    onClick={
                        () => {
                            router.push('scan/')
                        }
                    }
                />
                {
                    path==='/scan'? <div className="h-2 w-2 rounded-full bg-green-600 absolute top-12"></div>:null
                }
            </div>
            <div className="flex flex-col items-center">
                <SunIcon
                    className="h-6 w-6 text-gray-500"
                    onClick={() => {
                        router.push('weather/')
                    }}
                /> 
                {
                    path==='/weather'? <div className="h-2 w-2 rounded-full bg-green-600 absolute top-12"></div>:null
                }
            </div>
            <div className="flex flex-col items-center justify-center rounded-full">
                <ShoppingBagIcon
                    className="h-6 w-6 text-gray-500"
                    onClick={() => {
                        router.push('store/')
                }}
                /> 
                {
                    path==='/store'? <div className="h-2 w-2 rounded-full bg-green-600 absolute top-12"></div>:null
                }
            </div>
            <div className="flex flex-col items-center">
                <HashtagIcon
                    className="h-6 w-6 text-gray-500"
                    onClick={() => {
                        router.push('activity/')
                    }}
                />
                {
                    path==='/activity'? <div className="h-2 w-2 rounded-full bg-green-600 absolute top-12"></div>:null
                }
            </div>
            <div className="">
                <ChatIcon
                    className="h-6 w-6 text-gray-500"
                    onClick={() => {
                            router.push('chat/')  
                        }
                    }
                /> 
            </div>
    </div>
    )
}

export default BottomNavBar
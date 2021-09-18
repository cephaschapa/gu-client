import { useState, useEffect } from 'react'

import {useRouter} from 'next/router'
import { BellIcon, ChatIcon, CubeIcon, CubeTransparentIcon, HashtagIcon, ShoppingBagIcon, SunIcon, ViewGridAddIcon, ViewGridIcon } from '@heroicons/react/outline'

const BottomNavBar = () =>{
    const router = useRouter()
    return (
        <div className="flex bottom-0 bg-white border-t border-gray-200 h-16 w-full left-0 items-center justify-between p-4 fixed">
            <div className="">
                <CubeTransparentIcon
                    className="h-8 w-8 text-gray-600 "
                    onClick={
                        () => {
                            router.push('scan/')
                        }
                    }
                /> 
            </div>
            <div className="">
                <SunIcon
                    className="h-8 w-8 text-gray-600"
                    onClick={() => {
                        router.push('chat/')
                    }}
                /> 
            </div>
            <div className="flex border-2 border-gray-200 h-20 w-20 -mt-6 bg-white items-center justify-center rounded-full">
                <ShoppingBagIcon
                    className="h-8 w-8 text-gray-600"
                    onClick={() => {
                        router.push('chat/')
                }}
                /> 
            </div>
            <div className="">
                <HashtagIcon
                    className="h-8 w-8 text-gray-600"
                    onClick={() => {
                        router.push('chat/')
                    }}
                /> 
            </div>
            <div className="">
                <ChatIcon
                    className="h-8 w-8 text-gray-600"
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
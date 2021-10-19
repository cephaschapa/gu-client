import React, {useState, useEffect} from "react";
import Head from 'next/head'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { CameraIcon, ChevronDoubleRightIcon, ChevronRightIcon, FilterIcon, ShoppingCartIcon, ViewListIcon } from "@heroicons/react/outline";


const QrReader = dynamic(() => import('react-qr-reader'), {
    ssr: false
})



function Qr() {
    const [result, setResult] = useState([])
    const router = useRouter()
    useEffect(() => {
        async function d(){
            // const res = await axios.get('http://localhost:3000/api/hello')
            // console.log(res)
            // const {productName,numDaysToExpire,pesticideInfo,packager,location,managerInfo,inspection,halaalCert, dateProcessed, batchNumber, freshNess, gmoStatus} = res.data
            // const array = [productName,numDaysToExpire,pesticideInfo,packager,location,managerInfo,inspection,halaalCert, dateProcessed, batchNumber, freshNess, gmoStatus]
            // array.push()
            // setResult(array)
            // console.log(result)
        }
        
    }, []);

    const handleScan = data => {   
       if(data !== null) {
            router.replace(`/scan/results?data=${data}`)
       }
    }

    const handleError = (err) => {
        alert("Please allow carema permissions")
        console.error(err)
    }


    return (
        <div className="main">
            <Head>
                <title>Greenupp | Scan</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="h-screen pt-16 rounded-2xl">
                
                <div className="">
                    <QrReader
                        className=""
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%", backgroundColor: "black"}}
                    />
                </div>
                <div className="flex justify-center py-5">
                    <button onClick={() =>{
                        router.push('/scan')
                    }}  className="rounded-full shadow-md bg-green-600 w-1/2 p-4 text-white">Cancel Scan</button>
                </div>
            </section>
            
            
        </div>
    )
}

export default Qr

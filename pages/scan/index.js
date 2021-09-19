import React, {useState, useEffect} from "react";
import Head from 'next/head'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import dynamic from 'next/dynamic'
import axios from 'axios'


const QrReader = dynamic(() => import('react-qr-reader'), {
    ssr: false
})



function Dashboard() {
    const [result, setResult] = useState([])
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

    
    
    const handleScan = async data => {
        
        if(data){
            alert(data)
            const res = await axios.get('http://localhost:3000/api/hello')
            console.log(res)
            const {productName,numDaysToExpire,pesticideInfo,packager,location,managerInfo,inspection,halaalCert, dateProcessed, batchNumber, freshNess, gmoStatus} = res.data
            const array = [productName,numDaysToExpire,pesticideInfo,packager,location,managerInfo,inspection,halaalCert, dateProcessed, batchNumber, freshNess, gmoStatus]
            array.push()
            setResult(array)
            console.log(result)
        }
    }

    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div className="main">
            <Head>
                <title>Greenupp | Chat</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className=" justify-center items-center h-screen pt-20 px-4 rounded-2xl">
                <QrReader
                    className=""
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%", backgroundColor: "black"}}
    
                />
                {
                    result.length <= 0 ? <div className="grid grid-cols-1 pt-3 space-y-3 pb-20">
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Package Name</p>
                        {result[0]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                    <p className="text-sm text-gray-400">Freshness</p>
                        {result[10]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">GMO Status</p>
                        {result[11]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Date Processed</p>
                        {result[8]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Number of Days to Expiration</p>
                        {result[1]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Packager</p>
                        {result[3]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                    <p className="text-sm text-gray-400">Inspections Status</p>
                        {result[6]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Source Location</p>
                        {result[4]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Pesticide Info</p>
                        {result[2]}
                    </div>
                    <div className="p-4 border border-gray-100 rounded-2xl shadow-md">
                        <p className="text-sm text-gray-400">Batch Number</p>
                        {result[9]}
                    </div>
                </div>: <div className="flex justify-center items-center h-20">Point the camera at the QR Code</div>
                }
            </section>
            <nav className="">
                <BottomNavBar />
            </nav> 
        </div>
    )
}

export default Dashboard

import Head from 'next/head'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
function Store() {
    return (
        <div className="main">
            <Head>
                <title>Greenupp | Chat</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center">
                    <p className="text-3xl text-gray-500">Greenupp Store</p>
                    <p className="text-center">Buy  Sell  Rent</p>
                </div>
            </section>
            <nav className="">
                <BottomNavBar />
            </nav> 
        </div>
    )
}

export default Store

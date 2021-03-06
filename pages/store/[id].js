import Head from 'next/head'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import { ArrowCircleRightIcon, ArrowLeftIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon, PlusIcon, SearchIcon, ShieldCheckIcon, ShoppingCartIcon } from '@heroicons/react/outline'
function Product() {
    const router = useRouter()
    return (
        <div className="main">
            <Head>
                <title>Greenupp | Store</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className="flex flex-col py-4 mt-16 px-2 space-y-2">
               <div className="flex justify-between items-center">
                   <ArrowLeftIcon onClick={() =>{
                       router.push('/store')
                   }} className="h-6 w-6 text-gray-600"/>
                   
                   <div onClick={() =>{ router.push('cart/')}} className="flex items-center space-x-1 p-2 rounded-full bg-gray-600 text-white">
                        <ShoppingCartIcon onClick={() =>{
                            
                            }} className="h-6 w-6"/>
                        <p className="font-bold">ZMW 250.45</p>   
                   </div>
               </div>
               <div className="flex flex-col px-2 space-y-2">
                   <div className="h-72 w-full relative">
                        <Image src="/apples.jpg" objectFit="cover" layout="fill" className="rounded-2xl"/>
                   </div>
                   <div className="py-1 space-y-1">
                       <h1 className="text-2xl font-bold">Mediterranean Red Apples</h1>
                       <p className="font-bold text-gray-500">@ ZMW 16.55 | Kg</p>
                   </div>
                   <div className="py-3 space-y-2 bg-gray-100 p-2 rounded-2xl">
                        <h1 className="font-bold">Description</h1>
                        <p className="text-gray-600 text-justify line-clamp-4">
                            Enim adipisicing dolore qui occaecat labore deserunt pariatur irure et cupidatat deserunt consequat. Voluptate Lorem ut tempor excepteur proident. Tempor veniam officia veniam consectetur anim ea officia sunt veniam fugiat laboris. Cillum eu id aliqua excepteur consequat duis sit est aliquip do occaecat excepteur. Nostrud qui sit incididunt aliquip velit. Commodo esse sit elit quis.
                        </p>
                        <div className="flex justify-center px-6 w-full rounded-full text-gray-500">
                            <ChevronDownIcon className="h-8 w-8 rounded-full bg-green-600 text-white p-1 shadow-md"/>
                        </div>
                   </div>
                   <div className="flex justify-between items-center font-bold">
                       <p>Quantity</p>
                       <div className="flex items-center rounded-full w-32 justify-between border border-green-600 p-3 px-2 space-x-2">
                            <button><PlusIcon className="h-6 w-6 p-1 text-white rounded-full bg-green-600"/></button>
                              <p className="text-gray-600 text-xl">2</p>
                            <button><MinusIcon className="h-6 w-6 p-1 text-white rounded-full bg-green-600"/></button>
                       </div>
                   </div>

                   <div className="flex justify-between items-center font-bold">
                       <p>Sub totol</p>
                       <p className="text-2xl font-bold">
                            = ZMW 34.99
                       </p>
                   </div>
                  
                   <div className="flex border-t-2 border-gray-200 justify-between items-center py-4 space-x-2">
                       <button onClick={() =>alert('Item added to cart.')} className="flex shadow-md font-bold bg-green-600 p-3 rounded-full text-white w-full justify-center">
                          Add to cart
                       </button>
                       <button className="bg-green-600 shadow-md font-bold p-3 rounded-full text-white w-full">
                           Buy now
                       </button>
                   </div>
               </div>
            </section>
            {/* Categories */}
           
        </div>
    )
}

export default Product

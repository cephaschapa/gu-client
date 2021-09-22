import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'
import { ArrowCircleLeftIcon, ArrowLeftIcon, IdentificationIcon, LockClosedIcon, LoginIcon, LogoutIcon, MailIcon, PhoneIcon, PlusIcon } from '@heroicons/react/outline'
import {useRouter} from 'next/router'



export default function Home() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [form, setForm] = useState(0)
  const [active, setActive] = useState(false)
  const router = useRouter()
  const signUp = () => {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-auto">
            <div className="flex rounded-3xl w-full justify-center items-center bg-gray-200 h-auto signup-clipped__div  backdrop-filter backdrop-blur-lg bg-opacity-30 pb-10 pt-5 px-4">
            <div className="flex flex-col w-full justify-center items-center h-auto">
              <div className="flex justify-between w-full px-1 p-1">
                <ArrowLeftIcon onClick={()=>{
                  setForm(0)
                  setActive(false)
                  }} className="h-10 w-10 text-gray-200 border-2 rounded-full p-1 border-gray-200"/> 
                <LoginIcon onClick={()=>{setForm(2)}} className="h-10 w-10 text-gray-200 border-2 rounded-full p-1 border-gray-200"/> 
              </div>
              <p className="text-3xl text-white">Sign Up</p>
              <div className="divider h-1 w-16 bg-white mt-4 mb-4 float-left"></div>
              <div className="w-full pt-4">
                <form className="space-y-4">
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <IdentificationIcon className="h-6 w-6 text-gray-200"/>
                    <input name="fullName" type="text" value={fullName} onChange={(e)=>{
                        setFullName(e.target.value)
                        console.log(fullName)
                    }} className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Full Names"/>
                  </div>
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <IdentificationIcon className="h-6 w-6 text-gray-200"/>
                    <input name="username" value={fullName} onChange={(e)=>{
                        setUsername(e.target.value)
                        console.log(username)
                    }} type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Username"/>
                  </div>
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <MailIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Email"/>
                  </div>
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Phone Number"/>
                  </div>
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <LockClosedIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Password"/>
                  </div>
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <LockClosedIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Confirm Password"/>
                  </div>
                  <button onClick={(e)=>{
                      e.preventDefault()
                      router.push('chat/')
                  }} className="px-4 p-3 border-2 border-gray-200 w-full rounded-full bg-white">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            </div>
            
        </div>
    )
  }

  const login = () => {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-auto">
            <div className="flex rounded-3xl w-full justify-center items-center bg-gray-200 h-auto signup-clipped__div  backdrop-filter backdrop-blur-lg bg-opacity-30 pb-10 pt-5 px-4">
            <div className="flex flex-col w-full justify-center items-center h-auto">
              <div className="flex justify-between w-full px-1 p-1">
                <ArrowLeftIcon onClick={()=>{
                  setActive(false);
                  setForm(0)
                  }} className="h-10 w-10 text-gray-200 border-2 rounded-full p-1 border-gray-200"/> 
                <PlusIcon onClick={()=>{
                  setForm(1)}} className="h-10 w-10 text-gray-200 border-2 rounded-full p-1 border-gray-200"/> 
              </div>
              <p className="text-3xl text-white">Login In</p>
              <div className="divider h-1 w-16 bg-white mt-4 mb-4 float-left"></div>
              <div className="w-full pt-4">
                <form className="space-y-4">
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <IdentificationIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Username"/>
                  </div>
                  
                  <div className="flex space-x-2 px-4 p-3 border-2 border-gray-200 rounded-full">
                    <LockClosedIcon className="h-6 w-6 text-gray-200"/>
                    <input type="text" className="w-full bg-transparent outline-none text-white placeholder-white" placeholder="Password"/>
                  </div>
                  
                  <button onClick={(e)=>{
                      e.preventDefault()
                      router.push('chat/')
                  }} className="px-4 p-3 border-2 border-gray-200 w-full rounded-full bg-white">
                    Login
                  </button>
                </form>
              </div>
            </div>
            </div>
            
        </div>
    )
  }

  return (
    <div className="">
      <Head>
        <title>Greenupp | Precision Agriculture,  AI, Precision Agriculture, Blockchain, Realtime Analytics, Realtime Communicaion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white w-full h-screen px-4">
          {/* Wrapper */}
           <div className={`h-screen w-full flex flex-col items-center justify-center`}>
              {active? '':  <div className="flex rounded-3xl w-full justify-center items-center bg-gray-200 h-auto signup-clipped__div  backdrop-filter backdrop-blur-lg bg-opacity-30 pb-10 pt-5">
                <div className="flex flex-col w-full justify-center items-center h-auto px-4">
                  <p className="text-3xl text-white ">Greenupp Account</p>
                  <div className="divider h-1 w-16 bg-white mt-4"></div>
                  <div className="flex flex-col justify-center items-center space-y-4 pt-8">
                    <button onClick={
                      () => {
                        setForm(1)
                        setActive(true)
                      }
                    } className="border-2 border-gray-200 text-white p-4 w-52 rounded-full font-bold">Sign Up</button>
                    <button onClick={
                      () => {
                        setForm(2)
                        setActive(true)
                      }
                    } className="bg-white text-gray-600 p-4 w-52 rounded-full font-bold">Login</button>
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <p className="text-gray-200">Greenupp</p>
                    <p className="text-gray-200 text-xs">&copy; 2021</p>
                  </div>
                </div>
              </div>}
              {form == 1 ? signUp() :null}
              {form == 2 ? login() :null}
          </div>
         
          
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

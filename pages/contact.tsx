import Link from 'next/link'
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';

import React from 'react'
import { Document, Page } from 'react-pdf';


const contact = () => {
    const router = useRouter();
    const [LightMode, setLightMode] = useState(false);
    
    useEffect(() => {
        let LocalLightMode = localStorage.getItem('LightMode')
        if (LocalLightMode == "TRUE") {
            setLightMode(true)
        }
        else{
            setLightMode(false)
        }
    }, [])
  
    const onDocumentLoadSuccess = () => {
        console.log('Pdf loaded');
        
    }

  return (
    <div className={LightMode ? 'flex flex-col w-full min-h-screen bg-white' : 'flex flex-col w-full min-h-screen bg-dark'}>
        <meta name='theme-color' content={LightMode?'bg-white':'bg-dark'} />
        <div className='flex justify-end'>
            <NavBar LightMode = {LightMode} setLightMode = {setLightMode} />
        </div>

        <div className=' flex flex-wrap w-full justify-center md:py-20 xs:pt-20 xs:mt-0'>
            <div className='flex flex-col w-full justify-center items-center xs:mx-10 md-max:mx-10 lg:mx-32 xl:w-auto xl:px-10 pt-20 pb-10 shadow-black shadow-2xl rounded-2xl'>
                <p className={` flex text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}>
                    ===Resume===
                </p>
                <div className='bg-red-300 w-full h-full rounded-lg'>
                    <Document file="Resume.pdf" onLoadSuccess = {onDocumentLoadSuccess} >
                        <Page pageNumber={1}/>
                    </Document>
                </div>
            </div>
            <div className='flex flex-col w-full justify-center items-center xs:mx-10 md-max:mx-10 lg:mx-32 xl:w-auto xl:px-10 xs:mt-10 lg-max:mt-10 py-20 shadow-black shadow-2xl rounded-2xl'>
                <p className={` flex text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}>
                    Mail Me
                </p>
                
                <div className='flex mt-5 md:w-[500px] lg:w-[600px] xs:w-56 h-10 pb-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <input id={'Name'} className={`m-1 px-2 text-xl xs:text-sm w-full h-full rounded-md outline-none border-none ${LightMode?'bg-white text-dark':'bg-dark text-white'}`} placeholder={'Name'}></input>
                </div>

                <div className='flex mt-5 md:w-[500px] lg:w-[600px] xs:w-56 h-10 pb-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <input id={'Email'} className={`m-1 px-2 text-xl xs:text-sm w-full h-full rounded-md outline-none border-none ${LightMode?'bg-white text-dark':'bg-dark text-white'}`} placeholder={'Email'}></input>
                </div>
                
                <div className='flex mt-5 md:w-[500px] lg:w-[600px] xs:w-56 h-52 pb-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <textarea id={'Content'} className={`flex m-1 px-2 text-xl xs:text-sm w-full h-full rounded-md outline-none border-none ${LightMode?'bg-white text-dark':'bg-dark text-white'}`} placeholder={'Write your message here...'}></textarea>
                </div>
            </div>
        </div>
        
        
        </div>
  )
}
export default contact

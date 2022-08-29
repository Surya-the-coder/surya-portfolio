import Link from 'next/link'
import { useState } from 'react';
import Layout from '../components/Layout'

import BellIcon from '../assets/svg/Bell.svg';
import Abstract1 from '../assets/svg/Abstract1.svg';
import Abstract2 from '../assets/svg/Abstract2.svg';
import Abstract3 from '../assets/svg/Abstract3.svg';
import NavBar from '../components/NavBar';


const IndexPage = () => {
  const [LightMode, setLightMode] = useState(false);
  return (
    <div className={LightMode ? 'flex flex-col w-full min-h-screen bg-white' : 'flex flex-col w-full min-h-screen bg-black'}>
      <NavBar LightMode = {LightMode} setLightMode = {setLightMode} />
      <div className='flex pl-96 ml-52 pr-[8rem] pt-[23rem] absolute z-30'>
        <p className={`flex justify-center text-4xl w-full ${LightMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Software Developer with over 3 years of experience in development of software products and good at problem-solving and software design. A personable individual who is also dynamic and adept at a variety of programing languages and frameworks. Always looking to decipher problems to arrive at a simple yet scalable solutions.
        </p>
      </div>
      <div className=' flex flex-col pt-96 pl-48 relative z-0'>
        <div className='flex justify-left'>
          <p className={'flex justify-center text-8xl my-10 py-7 mx-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '}>
            Surya
          </p>
        </div>
        <div className='flex justify-left'>
          <p className={'flex justify-center text-8xl pb-7 mx-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}>
            Sundararajan
          </p>
          {/* <h1 className = "font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Tailwind CSS </h1> */}
        </div>
      </div>
    </div>
  )

}
export default IndexPage

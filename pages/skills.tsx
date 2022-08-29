import Link from 'next/link'
import { useState } from 'react';
import Layout from '../components/Layout'

import BellIcon from '../assets/svg/Bell.svg';
import Abstract1 from '../assets/svg/Abstract1.svg';
import Abstract2 from '../assets/svg/Abstract2.svg';
import Abstract3 from '../assets/svg/Abstract3.svg';
import NavBar from '../components/NavBar';


const skills = () => {
    const [LightMode, setLightMode] = useState(false);
    
    return (
        <div className={LightMode ? 'flex flex-col w-full min-h-screen bg-white' : 'flex flex-col w-full min-h-screen bg-black'}>
        <NavBar LightMode = {LightMode} setLightMode = {setLightMode} />
        <div className=' flex flex-col pt-[24rem] pl-[12rem] relative z-0'>
            <div className='flex justify-left'>
            <p className={` flex justify-center text-[96px] mx-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}>
                Skills Cooking...
            </p>
            </div>
        </div>
        </div>
    )

}
export default skills

import Link from 'next/link'
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'

import BellIcon from '../assets/svg/Bell.svg';
import Abstract1 from '../assets/svg/Abstract1.svg';
import Abstract2 from '../assets/svg/Abstract2.svg';
import Abstract3 from '../assets/svg/Abstract3.svg';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import SmallNavBar from '../components/SmallNavBar';


const skills = () => {
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
    
    return (
        <div className={LightMode ? 'flex flex-col w-full min-h-screen bg-white' : 'flex flex-col w-full min-h-screen bg-black'}>
        <NavBar LightMode = {LightMode} setLightMode = {setLightMode} />
        
        <div className=' flex flex-col md:pt-96 md:pl-48 relative md:z-0 xs:mt-20'>
            <div className='flex justify-left'>
                <p className={` flex justify-start text-8xl xs:text-4xl md:mx-20 xs:mx-5 py-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}>
                    Skills Cooking...
                </p>
            </div>
        </div>
        
        {/* small nav */}
        <SmallNavBar/>
        
        </div>
    )

}
export default skills

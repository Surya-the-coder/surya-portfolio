import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import Bell from '../assets/svg/Bell.svg'
import Abstract1 from '../assets/svg/Abstract1.svg';
import Abstract2 from '../assets/svg/Abstract2.svg';
import Abstract3 from '../assets/svg/Abstract3.svg';
import { motion } from 'framer-motion';
import { reverse } from 'dns';
import Link from 'next/link';
import SmallNavBar from '../components/SmallNavBar';

const IndexPage = () => {
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
      
      {/* Surya Sundararajan */}
      <div className='flex flex-col justify-start xl:mt-96 xl:ml-56 xl:relative xl:z-50 max-w-xl md:px-5 md:mx-5 md:my-20 md:py-0 xs:mx-5 xs:my-1'>
        <div className='flex justify-start '>
          <p className={'flex justify-center xl:text-8xl md:text-6xl xs:text-6xl pb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}> Surya </p>
        </div>
        <div className='flex justify-start '>
          <p className={'flex justify-center xl:text-8xl md:text-6xl xs:text-6xl pb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}> Sundararajan </p>
        </div>
      </div>

      {/* small nav */}
      <SmallNavBar/>

      {/* Summary */}
      <div className='flex flex-wrap-reverse justify-start xl:ml-96 xl:pl-32 xl:mr-32 xl:mt-96 xl:max-h-52 xl:absolute xl:z-50 md:px-5 md:mx-5 md:my-0 xs:mx-5 xs:hidden'>
        <p className={`flex flex-wrap-reverse justify-center bottom-10 my-1 text-4xl w-full  ${LightMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Software Developer with over 3 years of experience in development of software products and good at problem-solving and software design. A personable individual who is also dynamic and adept at a variety of programing languages and frameworks. Always looking to decipher problems to arrive at a simple yet scalable solutions.
        </p>
      </div>
      
      <div className='flex flex-wrap-reverse justify-start xl:ml-96 xl:pl-32 xl:mr-32 xl:mt-96 xl:max-h-52 xl:absolute xl:z-50 md:px-5 md:mx-5 md:my-0 xs:mx-5 md:hidden'>
        <ul className={`flex flex-wrap-reverse flex-col bottom-10 my-1 text-2xl w-full  ${LightMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <li> Software Designer </li>
          <li> Software Developer </li>
          <li> Problem Solver </li>
        </ul>
      </div>
      
      {LightMode?
        <div className='lg-max:hidden'>
          <motion.div className=' flex absolute -top-24 -left-32 rounded-full filter blur-3xl'initial={{scale:1, translate:0}} animate={{translateY:300, translateX:200, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType:'reverse'}}>
            <Abstract1/>
          </motion.div>
          <motion.div className='flex absolute top-72  right-36 rounded-full filter blur-3xl' initial={{translateX:-20, translateY:-15, scale:0.9}} animate={{translateX:-1, translateY:-300, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType: "reverse", ease:'easeInOut' }}>
            <Abstract2/>
          </motion.div>
        </div>
      :null}
      {LightMode?
        <div className='xs:hidden lg:hidden xl:hidden'>
          <motion.div className=' flex absolute -top-24 -left-32 rounded-full filter blur-3xl'initial={{scale:1, translate:0}} animate={{translateY:300, translateX:200, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType:'reverse'}}>
            <Abstract1/>
          </motion.div>
          <motion.div className='flex absolute top-72  right-36 rounded-full filter blur-3xl' initial={{translateX:-20, translateY:-15, scale:0.9}} animate={{translateX:-1, translateY:-300, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType: "reverse", ease:'easeInOut' }}>
            <Abstract2/>
          </motion.div>
        </div>
      :null}
    </div>
  )

}
export default IndexPage

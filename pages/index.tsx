import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import Bell from '../assets/svg/Bell.svg'
import Abstract1 from '../assets/svg/Abstract1.svg';
import Abstract2 from '../assets/svg/Abstract2.svg';
import Abstract3 from '../assets/svg/Abstract3.svg';
import { motion } from 'framer-motion';
import { reverse } from 'dns';

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
    <div className={LightMode ? 'flex flex-col min-w-full min-h-screen bg-white' : 'flex flex-col w-full min-h-screen bg-black'}>
      <NavBar LightMode = {LightMode} setLightMode = {setLightMode} />
      <div className='flex pl-96 ml-52 pr-32 mt-96 absolute z-50 '>
        <p className={`flex justify-center text-4xl w-full ${LightMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Software Developer with over 3 years of experience in development of software products and good at problem-solving and software design. A personable individual who is also dynamic and adept at a variety of programing languages and frameworks. Always looking to decipher problems to arrive at a simple yet scalable solutions.
        </p>
      </div>
      {LightMode?
        <>
          <motion.div className=' flex absolute -top-24 -left-32 rounded-full filter blur-3xl'initial={{scale:1, translate:0}} animate={{translateY:300, translateX:200, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType:'reverse'}}>
            <Abstract1/>
          </motion.div>
          <motion.div className='flex absolute top-72  right-36 rounded-full filter blur-3xl' initial={{translateX:-20, translateY:-15, scale:0.9}} animate={{translateX:-1, translateY:-300, scale:1.2}} transition={{duration:7, repeat:Infinity, repeatType: "reverse", ease:'easeInOut' }}>
            <Abstract2/>
          </motion.div>
        </>
      :null}
      <div className='flex absolute z-0 -left-32'>
        {/* <Abstract3/> */}
      </div>
      <div className=' flex flex-col justify-start mt-96 ml-72 relative z-50 max-w-xl rounded-xl'>
        <div className='flex justify-start '>
          <p className={'flex justify-center text-8xl pb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}>
            Surya
          </p>
        </div>
        <div className='flex justify-start '>
          <p className={'flex justify-center text-8xl pb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}>
            Sundararajan
          </p>
          {/* <h1 className = "font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Tailwind CSS </h1> */}
        </div>
      </div>
    </div>
  )

}
export default IndexPage

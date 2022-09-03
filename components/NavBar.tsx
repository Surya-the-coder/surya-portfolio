import Link from "next/link";
import Light from '../assets/svg/Light.svg';
import Dark from '../assets/svg/Dark.svg';
import { motion } from "framer-motion";

const NavBar = (props) => {
    let lightMode = ' bg-black text-white '
    let darkMode  = ' bg-white text-black '
    
    const setLocalLightMode = () => {
        if (props.LightMode) {
            props.setLightMode(false)
            localStorage.setItem('LightMode', 'FALSE')
        }
        else{
            props.setLightMode(true)
            localStorage.setItem('LightMode', 'TRUE')
        }
    }

    return (
        <div className="flex w-full xl:relative xl:z-50 xs:z-50 xs:absolute md:px-10">
            <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
            <nav className="flex w-full justify-end">
                <ul className="flex items-center ">
                    <li className={`md:mx-10 xs:mx-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1 xs:text-xs xs:flex xs:items-center`}>
                        <Link href = {{pathname : "/"}}>//about</Link>
                    </li>
                    <li className={`md:mx-10 xs:mx-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1 xs:text-xs xs:flex xs:items-center`}>
                        <Link href = {{pathname : "/experience"}} >//experience</Link>
                    </li>
                    <li className={`md:mx-10 xs:mx-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1 xs:text-xs xs:flex xs:items-center`}>
                        <Link href = {{pathname : "/skills"}} >//skills</Link>
                    </li>
                    <li className={`md:mx-10 xs:mx-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1 xs:text-xs xs:flex xs:items-center`}>
                        <Link href = {{pathname : "/contact"}} >//contact</Link>
                    </li>
                    <li className={`xs:mr-2 xs:text-xs`}>
                        <motion.button className={`flex items-center justify-center md:w-20 md:h-20`} onClick={setLocalLightMode} whileTap={{rotate:360, transition:{duration:0.3}}}>
                            {props.LightMode?<Dark className={`pl-2 pt-2`}/>:<Light/>}
                        </motion.button>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default NavBar;
import Link from "next/link";

const NavBar = (props) => {
    let lightMode = ' bg-black text-white '
    let darkMode  = ' bg-white text-black '
    return (
        <div className="flex w-full absolute z-50">
            <nav className="flex justify-end w-full">
                <ul className="flex items-center">
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href ="/" >01.about</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href ="experience" >02.experience</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href ="skills" >03.skills</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href ="contact" >04.contact</Link>
                    </li>
                    <li>
                        <div className='h-20 flex justify-end px-3 my-1'>
                            <button className={`w-20 rounded-full + ${props.LightMode ? lightMode : darkMode}`} onClick={()=>{props.LightMode?props.setLightMode(false):props.setLightMode(true)}}>
                                {props.LightMode?'Dark':'Light'}
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default NavBar;
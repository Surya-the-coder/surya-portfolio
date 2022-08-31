import Link from "next/link";

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
        <div className="flex justify-end w-full relative z-50">
            <nav className="flex w-full">
                <ul className="flex items-center">
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href = {{pathname : "/"}}>//about</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href = {{pathname : "/experience"}} >//experience</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href = {{pathname : "/skills"}} >//skills</Link>
                    </li>
                    <li className={`mx-10 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
                        <Link href = {{pathname : "/contact"}} >//contact</Link>
                    </li>
                    <li>
                        <div className='h-20 flex justify-end px-3 my-1'>
                            <button className={`w-20 rounded-full + ${props.LightMode ? lightMode : darkMode}`} onClick={setLocalLightMode}>
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
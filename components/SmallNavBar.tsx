import Link from "next/link";

const SmallNavBar = () => {
    return (
        <div>
           <ul className="flex justify-between items-center md:hidden mx-5">
          <li className={`text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
              <Link href = {{pathname : "/"}}>//about</Link>
          </li>
          <li className={`text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
              <Link href = {{pathname : "/experience"}} >//experience</Link>
          </li>
          <li className={`text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
              <Link href = {{pathname : "/skills"}} >//skills</Link>
          </li>
          <li className={`text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline-offset-1`}>
              <Link href = {{pathname : "/contact"}} >//contact</Link>
          </li>
      </ul>
        </div>
    );
}

export default SmallNavBar;
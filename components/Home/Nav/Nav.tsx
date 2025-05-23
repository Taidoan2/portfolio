import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'; // dùng thêm icon đóng
import { navLinks } from '@/constant/constant';


type Props = {
  openNav: () => void
}


 


const Nav = ({openNav}: Props) => {
   const [navBg, setNavBg] = React.useState(false);

   useEffect(() => {
     const handler = () => {
       if (window.scrollY >= 90) {
         setNavBg(true);
       } else {
         setNavBg(false);
       }
     }
     window.addEventListener('scroll', handler);
     return () => {
       window.removeEventListener('scroll', handler);
     }
   })
  return (
    <div className={`fixed ${navBg ? "bg-[#240b39]" : "fixed"} h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo1.png"
          alt="logo"
          width={110}
          height={120}
          className="ml-[1.5rem] sm:ml-0 h-full object-contain"
        />
        {/* Nav Link */}
        <div className="flex items-center ml-80 space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Button */}
        <div className="flex items-center justify-center space-x-4">
          <button
            className="sm:block sm:px-8 md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
            hover:bg-gray-200 transition-all duration-200 rounded-lg
            "
          >
            Hire Me
          </button>
          {/* burger */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
          
        </div>
      </div>
    </div>
  );
}

export default Nav
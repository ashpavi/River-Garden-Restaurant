import React from 'react'
import Container from "./ui/container"
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function Header(){
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className=" bg-transparent">
        <Container className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#home">
            <img
              src="/images/logo.jpg"
              
              alt="River Garden"
              className="w-12 h-12 rounded-md bg-white p-1"
            />
            </a>
          </div>

          {/* Navigation */}
          <nav className="
            hidden md:flex 
            gap-12 text-md text-white 
            flex-1 justify-center
          ">
            <a href="#home" className="text-[#ff7a42] font-medium">Home</a>
            <a href="#aboutUs" className="hover:text-[#ff7a42]">About Us</a>
            <a href="#gallery" className="hover:text-[#ff7a42]">Menu</a>
            <a href="#catering" className="hover:text-[#ff7a42]">Offers</a>
            <a href="#contact" className="hover:text-[#ff7a42]">Contact</a>
          </nav>

          {/* Icons */}
          <div className="
            hidden md:flex 
            items-center gap-8 text-white text-2xl
          ">
            <BiSearchAlt className='hover:text-[#ff7a42] text-3xl cursor-pointer' />
            <CgProfile className='hover:text-[#ff7a42] cursor-pointer' />
          </div>

        </Container>
      </div>
    </header>
  )
}

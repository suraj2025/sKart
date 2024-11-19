'use client'; // Ensures this component runs on the client side
import React from 'react'
import Image from 'next/image';
import logo from "../../public/logo.png"
const Footer = () => {
  return (
    <div className='bg-black text-white '>
      <footer className="body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center ">
        <Image src={logo} width={100} height={10}/>
      </a>
      <p className="mt-2 text-sm ">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">First Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">First Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">First Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">First Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a className="hover:text-yellow-400 cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  
</footer>
    </div>
  )
}

export default Footer

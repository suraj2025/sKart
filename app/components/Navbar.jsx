'use client'; // Ensures this component runs on the client side
import React, { useState } from 'react';
import { useCart } from '../cartProvider';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, ShoppingCartIcon, TrashIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'; // Import Heroicons
import Image from 'next/image'; // Use Next.js Image component
import logo from "../../public/logo.png"; // Ensure the logo is placed in the public folder
import Link from 'next/link';

export default function Navbar() {
    const { cart, addToCart, increment, decrement, deleteItem, emptyCart } = useCart();

    console.log(cart)
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State to manage menu visibility
    const [cartVisible, setCartVisible] = useState(false);
    function handleChange() {
        setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
    }
    function handleClick() {
        setCartVisible(!cartVisible); // Toggle menu visibility
    }

    return (
        <nav className='bg-black flex justify-between sticky top-0 z-10'>
            <div className='flex'>
                <Bars3Icon
                    className='my-5 ms-4 me-24 cursor-pointer h-6 w-6 text-yellow-300 md:hidden'
                    onClick={handleChange} // Toggle menu on click
                />
                {/* Replace img with Next.js Image component */}
                <Link href='/'>
                    <Image className=' ms-4 my-4 cursor-pointer' src={logo} alt='Logo' width={100} height={10} quality={100} />
                </Link>
            </div>
            <div className='hidden md:flex pt-5'>
                <a className='text-white mx-3 hover:text-yellow-400' href="/tshirts">T-Shirts</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/hoodies">Hoodies</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/sweatshirts">Sweatshirts</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/mugs">Mugs</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/zipperhoodies">Zipper Hoodies</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/mousepad">Mousepad</a>
                <a className='text-white mx-3 hover:text-yellow-400' href="/cap">Cap</a>
            </div>
            <div className="hidden md: my-4 md:flex md:items-center md:space-x-4">
                {/* Magnifying Glass Icon */}
                <MagnifyingGlassIcon className="text-yellow-300 h-6 w-6" />

                {/* Shopping Cart Icon with Badge */}
                <div className="relative inline-block cursor-pointer">
                    <ShoppingCartIcon className="text-yellow-300 h-6 w-6" onClick={handleClick} />
                    <span
                        className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
                    >
                        {cart.length}
                    </span>
                </div>

                {/* Login Button */}
                <button className="bg-yellow-500 px-5 py-1 rounded-2xl font-bold">
                    Login
                </button>
            </div>


            {/* Mobile Menu */}
            {isMenuVisible && ( // Only render if menu is visible
                <div className=" fixed inset-0 bg-white z-50 md:hidden">
                    <div className='flex bg-black justify-between '>
                        <div className="flex">
                            <XMarkIcon
                                onClick={handleChange}
                                className='text-yellow-300 my-5 ms-4 me-24 cursor-pointer h-6 w-6'
                            />
                            {/* Replace img with Next.js Image component */}
                            <Image className='h-10 ms-4 my-2' src={logo} alt='Logo' width={100} height={10} />
                        </div>
                        {/* <div className='my-3'>
                            <MagnifyingGlassIcon className='text-white me-4 h-6 w-6 inline-block' />
                            <button className='me-4 bg-yellow-500 px-5 pb-1 rounded-2xl font-semibold'>Login</button>
                        </div> */}
                    </div>
                    <div className='flex flex-col bg-black h-screen pt-2'>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/tshirts">T-Shirts</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/hoodies">Hoodies</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/sweatshirts">Sweatshirts</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/mugs">Mugs</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/xipperhoodies">Zipper Hoodies</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/mousepad">Mousepad</a>
                        <a className='text-yellow-300 flex justify-center cursor-pointer rounded-2xl hover:bg-gray-800 py-1 font-bold font-mono' href="/cap">Cap</a>
                    </div>
                </div>
            )}

            {cartVisible && (
                <div className="cartVisible bg-gray-800 shadow-xl h-screen fixed right-0 top-0 w-full md:w-96 z-50">
                    <div className="p-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-gray-800 p-4 flex justify-between items-center">
                                <h5 className="text-white text-sm font-semibold">Cart Calculation ({cart.length})</h5>
                                <XMarkIcon
                                    onClick={handleClick}
                                    className="text-yellow-300 my-5 ms-4 cursor-pointer h-6 w-6"
                                />
                            </div>

                            <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
                                {/* Trash Icon */}
                                <TrashIcon className="text-red-600 h-6 w-6 cursor-pointer hover:text-red-700 transition duration-300" />

                                {/* Product Image */}
                                <Image
                                    className="rounded-lg cursor-pointer"
                                    src="https://rukminim2.flixcart.com/image/612/612/kws5hu80/cap/z/a/y/free-unisex-black-woolen-winter-beanie-cap-with-scarf-for-men-original-imag9dw2xfkwcxzb.jpeg?q=70"
                                    alt="Product Image"
                                    width={50}
                                    height={50}
                                    quality={100}
                                />

                                {/* Product Name */}
                                <span className="text-white font-semibold text-sm">
                                    Cap (Winter/Black)
                                </span>

                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-2 text-white">
                                    <button className="hover:text-yellow-300 transition duration-300">
                                        <MinusCircleIcon className="text-yellow-400 w-6 h-6" />
                                    </button>
                                    <span className="font-medium text-lg">1</span>
                                    <button className="hover:text-yellow-300 transition duration-300">
                                        <PlusCircleIcon className="text-yellow-400 w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-start items-center space-x-4 mt-4">
                            <button className="bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md hover:bg-yellow-400 transition duration-300">
                                Checkout
                            </button>
                            <button className="flex items-center bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md hover:bg-yellow-400 transition duration-300">
                                <TrashIcon className="text-red-700 h-5 w-5 mr-2" />
                                Empty Cart
                            </button>
                        </div>

                    </div>
                </div>
            )}



        </nav>
    );
}

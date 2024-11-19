'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, ShoppingCartIcon, HomeIcon, MoonIcon, UserIcon,XMarkIcon,TrashIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
const FixedFooter = () => {
  const [cart, setCart] = useState(false);
  function handleClick() {
    setCart(!cart); // Toggle menu visibility
}
    return (
        <div className="fixed bottom-0 w-full bg-gray-800 py-3 flex justify-around items-center shadow-lg shadow-gray-800 md:hidden">
        <Link href='/'>

        <HomeIcon className="h-8 w-8 text-yellow-300" />
        </Link>
        <MagnifyingGlassIcon className="h-8 w-8 text-yellow-300" />
        
        <div className="relative inline-block cursor-pointer">
          <ShoppingCartIcon className="h-8 w-8 text-yellow-300" onClick={handleClick}/>
          <span
            className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
          >
            {5}
          </span>
        </div>
        
        <MoonIcon className="h-8 w-8 text-yellow-300" />
        <UserIcon className="h-8 w-8 text-yellow-300" />
        {cart && (
                <div className="cart bg-gray-800 shadow-xl h-screen fixed right-0 top-0 w-full md:w-96 z-50">
                    <div className="p-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-gray-800 p-4 flex justify-between items-center">
                                <h5 className="text-white text-sm font-semibold">Cart Calculation (1)</h5>
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

      </div>
      
    );
};

export default FixedFooter;

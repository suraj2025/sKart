


import { StarIcon, HeartIcon, ShareIcon, ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/24/solid'; // Solid icons


import Image from 'next/image';
export default async function ProductPage({params}){
    const id = (await params).id;
    const res = await fetch(`http://localhost:3000/api/product/${id}`);
    const data = await res.json();

    if (!data) return (<div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="relative w-20 h-20">
            <div className="absolute w-full h-full border-4 border-transparent border-t-yellow-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-700">loading...</p>
    </div>)
    return (
        <div className="bg-black">
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                        <Image
                            alt={data.name}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                            src={data.image}
                            width={200}
                            height={100}
                        />

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.category}</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{data.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <StarIcon className="w-4 h-4 text-yellow-500" />
                                    <StarIcon className="w-4 h-4 text-yellow-500" />
                                    <StarIcon className="w-4 h-4 text-yellow-500" />
                                    <StarIcon className="w-4 h-4 text-yellow-500" />
                                    
                                    <span className="text-white ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                    <a className="text-gray-500">
                                        <HeartIcon className="w-5 h-5" />
                                    </a>
                                    <a className="text-gray-500">
                                        <ShareIcon className="w-5 h-5" />
                                    </a>
                                    <a className="text-gray-500">
                                        <ShoppingBagIcon className="w-5 h-5" />
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-white">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3 text-white">Color</span>
                                    <button className="border-2 border-t-gray-300 bg-pink-600 rounded-full w-6 h-6 focus:outline-none  border-transparent animate-spin"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3 text-white">Size</span>
                                    <div className="relative">
                                        <select className="bg-yellow-400 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <ChevronDownIcon className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="title-font font-medium text-2xl text-white">₹ 58.00</span>
                                <div className="flex justify-start mt-2">
                                    <button className="flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" >Add To Cart</button>
                                    <button className="flex ml-4 text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Buy Now</button>
                                    <button className="rounded-full w-8 h-8 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <HeartIcon className='p-1' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



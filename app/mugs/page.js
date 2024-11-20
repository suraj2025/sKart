import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Mugs = async () => {
  const res = await fetch('http://localhost:3000/api/product');
  const data = await res.json();

  // Use the filter method tyo get all items with the category 'tshirts'
  const products = data.filter(item => item.category === 'Mugs');
  return (
    <div className='bg-black'>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href={`/product/${product._id}`}>

                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image alt={product.name} className="object-cover object-center w-full h-full block" width={200} height={20} src={product.image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-white text-xs tracking-widest title-font mb-1">{product.category}</h3>
                    <div className="flex justify-between">

                      <h2 className="text-white title-font text-lg font-medium">{product.name}</h2>
                      <p className="mt-1">₹ {product.price}</p>
                    </div>
                    

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mugs

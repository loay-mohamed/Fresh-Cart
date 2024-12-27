import React from 'react'

export default function BrandCard({brandInfo}) {
    const {image, name } = brandInfo;
  return (
    <>
    <div  className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden'>
        <div className='relative'>
            <img className='w-full' src={image} alt="" />
        </div>
        <div className='p-3 ' >
            <h3 className='text-teal-800 text-center font-semibold'>{name}</h3>
            
            
        </div>
    </div>
    </>
  )
}
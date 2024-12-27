import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios, { Axios } from 'axios';
import Loading from '../../components/Loading/Loading';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider';
import UserOpinion from '../../components/UserOpnion/UserOpnion';

export default function Home() {


  return (
    <>
      <HomeSlider />
      <CategoriesSlider />
      <div className='mt-12'>
        <h2 className='text-3xl font-bold text-center mb-12 text-teal-900'>OUR HAPPY CUSTOMERS</h2>
        <UserOpinion />
      </div>

    </>
  )
}

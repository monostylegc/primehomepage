import type { NextPage } from 'next'

import AOS from 'aos'
import { useState, useEffect, useRef } from 'react'
import "aos/dist/aos.css"

import Hero from '../components/hero'
import Layout from '../components/layout'
import Map from '../components/map'

const Home: NextPage = () => {
  useEffect(
    ()=>{
        AOS.init({
            duration: 1000
        })
    }
  ,[])

  return (
    <Layout>
      <Hero imgurl='https://www.disc21.co.kr/img/main/main1_m.png' title='평생관리' subtitle='맞춤진료'/>
      <section className='mx-auto max-w-7xl mt-12'>
        <div className='p-8 cursor-pointer hover:bg-slate-100' data-aos="fade-left">
          <h2 className='text-primary font-semibold text-6xl'>
            척추센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-3xl mt-4 ml-12'>
            안 아픈 것을 넘어서 더 건강하게
          </h3>
        </div>
        <div className='p-8 text-right mt-16
        cursor-pointer hover:bg-slate-100' data-aos="fade-left">
          <h2 className='text-secondary font-semibold text-6xl'>
            관절센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-3xl mt-4 mr-12'>
          최소한의 치료로 최대한의 효과를
          </h3>
        </div>
        <div className='p-8  mt-16 cursor-pointer hover:bg-slate-100' data-aos="fade-right">
          <h2 className='text-primary font-semibold text-6xl'>
            검진내과센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-3xl mt-4 ml-12'>
            미리 미리 잘 찾아서 치료한다
          </h3>
        </div>
      </section>
      
      <section className='p-8 m-4 mx-auto max-w-7xl'>
        <h2 className='text-primary font-semibold text-3xl'>이 달의 혜택</h2>
        <div className='mt-4 flex space-x-6 justify-start 
        overflow-x-scroll scrollbar-thumb-slate-600 scrollbar-thin'>
          <div className='w-60 shrink-0 rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
        </div>
      </section>
      
      <section className='p-8 m-4 mx-auto max-w-7xl'>
        <h2 className='text-primary font-semibold text-3xl'>프라임 의료진</h2>
        <div className='mt-4 flex space-x-6 justify-start 
        overflow-x-scroll scrollbar-thumb-slate-600 scrollbar-thin'>
          <div className='w-60 shrink-0 rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
          <div className='w-60 shrink-0 aspect-square rounded-md bg-slate-500'>
            
          </div>
        </div>
      </section>
      <div className='p-8 m-4 mx-auto max-w-7xl'>
        <h2 className='text-3xl text-primary font-semibold'>오시는 길</h2>
        <div className='mt-4 '>
          <Map />
        </div>
      </div>
    </Layout>
  )
}

export default Home

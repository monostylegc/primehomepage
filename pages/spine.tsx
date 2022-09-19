import type { NextPage } from 'next'

import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"

import Card from '../components/card'
import CardSection from '../components/cardsection'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Spine: NextPage = () => {
    useEffect(
        ()=>{
            AOS.init({
                duration: 1000
            })
        }
      ,[])
 
  return (
    <Layout>
        <Hero title='프라임' subtitle='척추센터' imgurl='https://www.disc21.co.kr/img/main/main4.png' />

        <CardSection title='척추센터 의료진'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' description='뇌 척추질환' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환' link='#'/>
        </CardSection>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mx-2 italic'>
        <section className='bg-slate-100 py-2 mx-2 rounded-lg mt-12 shadow-lg' data-aos="fade-up">
            <div className='px-6 m-4 mx-auto max-w-7xl'>
                <h2 className='text-3xl text-primary font-semibold '>치료철학</h2>
                <p className='mt-6 text-gray-600'>허리 질환의 원인은 사람마다 다르다  
                <span className='text-secondary text-2xl font-bold underline px-2'>개인 맞춤치료</span></p>
                <p className='mt-6 text-gray-600'>단순 치료를 넘어서  
                <span className='text-secondary text-2xl font-bold underline px-2'>더 건강</span>해지는 치료</p>
                <p className='mt-6 text-gray-600'>최대한   
                <span className='text-secondary text-2xl font-bold underline px-2'>안 아프게</span></p>
                <p className='mt-6 text-gray-600'>최대한   
                <span className='text-secondary text-2xl font-bold underline px-2'>안전</span>하게</p>
            </div>
        </section>
        <section className='py-2 mx-2 rounded-lg mt-12 shadow-lg' data-aos="fade-up">
            <div className='px-6 m-4 mx-auto max-w-7xl'>
                <h2 className='text-3xl text-primary font-semibold '>이럴 때 오세요</h2>
                <p className='mt-6 text-gray-600'>목 허리가 
                <span className='text-red-400 text-2xl font-bold underline px-2'>아플 때</span></p>
                <p className='mt-6 text-gray-600'>팔 또는 다리가  
                <span className='text-red-400 text-2xl font-bold underline px-2'>저릴 때</span></p>
                <p className='mt-6 text-gray-600'>팔 또는 다리가    
                <span className='text-red-400 text-2xl font-bold underline px-2'>전기가 통하 듯이</span>
                아플 때
                </p>
                <p className='mt-6 text-gray-600'>팔 또는 다리에    
                <span className='text-red-400 text-2xl font-bold underline px-2'>힘이 빠질</span>
                때
                </p>
            </div>
        </section>
        </div>
    </Layout>
  )
}

export default Spine

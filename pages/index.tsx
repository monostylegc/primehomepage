import type { NextPage } from 'next'

import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"

import Hero from '../components/hero'
import Layout from '../components/layout'
import Map from '../components/map'
import CardSection from '../components/cardsection'
import Card from '../components/card'

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
      <section className='mx-auto max-w-7xl mt-12 mb-12'>
        <div className='p-8 cursor-pointer hover:bg-slate-100' data-aos="fade-right">
          <h2 className='text-primary font-semibold text-6xl'>
            척추센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-2xl mt-4 ml-12'>
            안 아픈 것을 넘어서 더 건강하게
          </h3>
        </div>
        <div className='p-8 text-right mt-16
        cursor-pointer hover:bg-slate-100' data-aos="fade-left">
          <h2 className='text-secondary font-semibold text-6xl'>
            관절센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-2xl mt-4 mr-12'>
          최소한의 치료 최대한의 효과
          </h3>
        </div>
        <div className='p-8  mt-16 cursor-pointer hover:bg-slate-100' data-aos="fade-right">
          <h2 className='text-primary font-semibold text-6xl'>
            검진내과센터
          </h2>
          <h3 className='text-gray-700 font-semibold text-2xl mt-4 ml-12'>
            미리 미리 잘 찾아서 치료한다
          </h3>
        </div>
      </section>
      
      <CardSection title='이 달의 혜택'> 
        <Card imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=31' title='코로나 후유증 진료' description='코로나 후유증 클리닉' link='#'/>
        <Card imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=38' title='통합 간병 서비스' description='통합간병서비스를 시작합니다' link='#'/>
        <Card imgurl='https://www.disc21.co.kr/img/main/banner1.png' title='간호사 모집' description='프라임병원에서 함께할 간호사 선생님을 찾습니다.' link='#'/>
      </CardSection>
      
      <CardSection title='프라임 의료진'> 
        <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' description='뇌 척추질환' link='#'/>
      </CardSection>
      
      <div className='p-8 m-4 mx-auto max-w-7xl'>
        <h2 className='text-3xl text-primary font-semibold'>오시는 길</h2>
        <div className='mt-4 '>
          <Map lat={ 35.10584586911908 } lng={128.9658011123337}/>
        </div>
      </div>
    </Layout>
  )
}

export default Home

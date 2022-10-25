import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import Testimonial from '../components/testimonial'
import Slider from '@components/slider'
import Card from '@components/card'
import DoctorCard from '@components/doctorcard'

const Home: NextPage = () => {
  return (
    <Layout>
      <Slider autoplay slidesPerView={1} pagination delay={5000} loop>
        <Hero 
        imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
        title='프라임병원' 
        subtitle='아프지 말고 살아야죠' 
        />
        <Hero 
        imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
        title='프라임병원' 
        subtitle='아프지 말고 살아야죠' 
        />
        <Hero 
        imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
        title='프라임병원' 
        subtitle='아프지 말고 살아야죠' 
        />
         <Hero 
        imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
        title='프라임병원' 
        subtitle='아프지 말고 살아야죠' 
        />
         <Hero 
        imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
        title='프라임병원' 
        subtitle='아프지 말고 살아야죠' 
        />

      </Slider>
      
      <Testimonial title='프라임병원의 진료철학' description='"아프지 말고 즐겁게 살자 아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자
      I didnt even need training to get started. It really saves me time and effort. Framer is exactly what our business has been lacking. It"' />

      <section className='flex flex-col items-center max-w-4xl mx-auto p-6 mb-16'>
        <h1 className="text-4xl flex-1">프라임병원 클리닉</h1>
        <p className="text-gray-500 my-5 leading-10 serif">1% 라도 더 안전하게, 빠른 일상 생활 복귀를 추구합니다</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          <div className='flex flex-col justify-end aspect-square relative bg-green-400 cursor-pointer'>
            <img src="/photo/clinic1.png" className='w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3' />
            <p className='text-white text-center text-xl mb-4'>척추클리닉</p>
          </div>
          <div className='flex flex-col justify-end aspect-square relative bg-green-500 cursor-pointer'>
            <img src="/photo/clinic2.png" className='w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3' />
            <p className='text-white text-center text-xl mb-4'>관절클리닉</p>
          </div>
          <div className='flex flex-col justify-end  aspect-square relative bg-green-600 cursor-pointer'>
            <img src="/photo/clinic3.png" className='w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3' />
            <p className='text-white text-center text-xl mb-4'>내과클리닉</p>
          </div>
          <div className='flex flex-col justify-end aspect-square relative bg-green-700 cursor-pointer'>
            <img src="/photo/clinic4.png" className='w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3' />
            <p className='text-white text-center text-xl mb-4'>건강검진센터</p>
          </div>
        </div>
      </section>
      <section className='max-w-4xl mx-auto p-6 mb-16 text-center'>
        <h1 className="text-4xl flex-1">프라임병원 뉴스</h1>
        <p className="text-gray-500 my-5 leading-10 serif">새로운 소식 알려요</p>
        <Slider slidesPerView={2} navigation >
          <Card link='/' imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='간호1등급' description='프라임병원으로 오세요'/>
          <Card link='/' imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='간호1등급' description='프라임병원으로 오세요'/>
          <Card link='/' imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='간호1등급' description='프라임병원으로 오세요'/>
          <Card link='/' imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='간호1등급' description='프라임병원으로 오세요'/>
        </Slider>
      </section>

      <section className='max-w-4xl mx-auto p-6 mb-16 text-center'>
        <h1 className="text-4xl flex-1">프라임병원 의료진</h1>
        <p className="text-gray-500 my-5 leading-10 serif">의사선생님들</p>
        <Slider slidesPerView={2} navigation >
          <DoctorCard link='/' imgurl='/photo/원장님사진.jpg' name='최봉식' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/이기창.jpg' name='이기창' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/박만제.png' name='박만제' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/홍완주.jpg' name='홍완주' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/심형훈.jpg' name='심형훈' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/김주연원장.jpg' name='김주연' part='신경외과'/>
          <DoctorCard link='/' imgurl='/photo/이강유.jpg' name='이강유' part='신경외과'/>
        </Slider>
      </section>

      <Map />
        
    </Layout>
  )
}

export default Home

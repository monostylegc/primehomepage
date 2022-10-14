import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import ScrollSection from '@components/scrollsection'
import Card from '@components/card'
import Feature from '@components/feature'
import Testimonial from '../components/testimonial';

import { FaSubway, FaBus } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero 
      imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
      title='프라임병원' 
      subtitle='아프지 말고 살아야죠' 
     />
    <Testimonial title='프라임병원의 진료철학' description='"아프지 말고 즐겁게 살자 아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자아프지 말고 즐겁게 살자
    I didnt even need training to get started. It really saves me time and effort. Framer is exactly what our business has been lacking. It"' />
    <Feature 
      title='어디가 아프세요?' 
      description='어디가 아프세요?'>
        <Card link='/spine#section' title='목 허리 질환' subtitle="목허리가 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card link='#' title='어깨 무릎 질환' subtitle="어깨무릎이 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card link='#' title='내과질환 및 검진' subtitle="내과질환" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>      
    </Feature>

    <Feature 
      title='프라임 치료센터' 
      description='잘하는 것에 집중합니다'>
        <Card link='/spine#section' title='척추센터' subtitle="목허리가 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card link='#' title='관절센터' subtitle="어깨무릎이 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card link='#' title='관절센터' subtitle="어깨무릎이 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
    </Feature>

    <ScrollSection title='프라임병원 새소식' description='항상 좋은 소식'>
      <Card width={200} imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='News' subtitle='간호간병통합서비스' link='#'/>
      <Card width={200} imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='News' subtitle='간호간병통합서비스' link='#'/>  
      <Card width={200} imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='News' subtitle='간호간병통합서비스' link='#'/>  
      <Card width={200} imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=41' title='News' subtitle='간호간병통합서비스' link='#'/>    
    </ScrollSection>
      
    <ScrollSection 
    title='의료진'
    description='제대로된 의료진'>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='척추질환 척추외상' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
      <Card width={200} imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
    </ScrollSection>
      
      <div className='flex flex-col max-w-4xl mx-auto p-6 mb-20'>
        <h1 className="text-4xl flex-1 text-center mb-10">오시는 길</h1>
        <Map lat={ 35.10584586911908 } lng={128.9658011123337}/>
      
        <div className='flex items-center mt-8'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'>지하철</p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-red-500 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>1호선</p>
          </div>
          <p className=" flex-grow lg:text-lg text-gray-600 ml-10">하단역 4번 출구 앞</p>
        </div>
        <div className='flex items-center mt-4'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'>버스</p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-green-700 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>일반</p>
          </div>
          <div className="flex flex-grow lg:text-lg items-center ml-10 gap-x-10 gap-y-2 flex-wrap">
            <span className='text-gray-600'>3</span>
            <span className='text-gray-600'>55</span>
            <span className='text-gray-600'>58</span>
            <span className='text-gray-600'>58-2</span>
            <span className='text-gray-600'>68</span>
            <span className='text-gray-600'>168</span>
            <span className='text-gray-600'>520</span>
          </div>
        </div> 
        <div className='flex items-center mt-4'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'></p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-red-800 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>급행</p>
          </div>
          <div className="flex flex-grow lg:text-lg items-center ml-10 gap-x-10 gap-y-2 flex-wrap">
            <span className='text-gray-600'>1005</span>
            <span className='text-gray-600'>2000</span>
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'></p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-blue-800 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>좌석</p>
          </div>
          <div className="flex flex-grow lg:text-lg items-center ml-10 gap-x-10 gap-y-2 flex-wrap">
            <span className='text-gray-600'>58-1</span>
            <span className='text-gray-600'>221</span>
            <span className='text-gray-600'>2000</span>
          </div>
        </div>
        <div className='flex items-start mt-4'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'></p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-green-500 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>마을</p>
          </div>
          <div className="flex flex-grow lg:text-lg items-center ml-10 gap-x-10 gap-y-2 flex-wrap">
            <span className='text-gray-600'>강서구 3</span>
            <span className='text-gray-600'>강서구 7</span>
            <span className='text-gray-600'>강서구 9</span>
            <span className='text-gray-600'>강서구 9-1</span>
            <span className='text-gray-600'>강서구 9-2</span>
            <span className='text-gray-600'>강서구 12</span>
            <span className='text-gray-600'>강서구 13</span>
            <span className='text-gray-600'>강서구 14</span>
            <span className='text-gray-600'>강서구 15</span>
            <span className='text-gray-600'>강서구 16</span>
            <span className='text-gray-600'>강서구 17</span>
            <span className='text-gray-600'>강서구 20</span>
            <span className='text-gray-600'>강서구 21</span>
            <span className='text-gray-600'>사하구 10</span>
          </div>
        </div>            
      </div>
      
    </Layout>
  )
}

export default Home

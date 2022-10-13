import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import ScrollSection from '@components/scrollsection'
import Card from '@components/card'
import Feature from '@components/feature'
import Testimonial from '../components/testimonial';

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
      
      <div style={{"height":"500px", "width" : "1000px"}}>
        <div className='mt-4'>
          <Map lat={ 35.10584586911908 } lng={128.9658011123337}/>
        </div>
      </div>
      
    </Layout>
  )
}

export default Home

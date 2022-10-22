import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import Testimonial from '../components/testimonial'


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
  
    <Map />
      
    </Layout>
  )
}

export default Home

import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import ScrollSection from '@components/scrollsection'
import Card from '@components/card'
import Feature from '@components/feature'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero 
      imgurl='https://www.disc21.co.kr/img/main/main1_m.png' 
      title='프라임병원' 
      subtitle='아프지 말고 살아야죠' 
     />

      <Feature 
      title='전문 진료' 
      description='잘하는 것에 집중합니다'>
        <Card title='목 허리 질환' subtitle="목허리가 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card title='어깨 무릎 질환' subtitle="어깨무릎이 아플때" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>
        <Card title='내과질환 및 검진' subtitle="내과질환" imgurl='https://media.istockphoto.com/photos/cropped-shot-of-an-unrecognizable-businesswoman-standing-alone-in-the-picture-id1324642231?b=1&k=20&m=1324642231&s=170667a&w=0&h=9UbsG2jTgFaAowE0csV_G2xJKJZ9jsbL_8F5uoDoLOE='></Card>      
      </Feature>
      
      <section className='mx-auto max-w-7xl bg-white rounded-lg  m-4 p-8'>
        <h2 className='text-primary text-5xl'>프라임 진료센터</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 gap-8'>
          <div className='cursor-pointer rounded-lg border border-gray-600 p-8'>
            <h3 className='text-primary text-3xl'>
              척추센터
            </h3>
            <h5 className='text-gray-600 text-xl mt-2'>
              안 아픈 것을 넘어서 더 건강하게
            </h5>
          </div>
          <div className='cursor-pointer rounded-lg border border-gray-600 p-8'>
            <h3 className='text-primary text-3xl'>
              척추센터
            </h3>
            <h5 className='text-gray-600 text-xl mt-2'>
              안 아픈 것을 넘어서 더 건강하게
            </h5>
          </div>
          <div className='cursor-pointer rounded-lg border border-gray-600 p-8'>
            <h3 className='text-primary text-3xl'>
              척추센터
            </h3>
            <h5 className='text-gray-600 text-xl mt-2'>
              안 아픈 것을 넘어서 더 건강하게
            </h5>
          </div>
          <div className='cursor-pointer rounded-lg border border-gray-600 p-8'>
            <h3 className='text-primary text-3xl'>
              척추센터
            </h3>
            <h5 className='text-gray-600 text-xl mt-2'>
              안 아픈 것을 넘어서 더 건강하게
            </h5>
          </div>
        </div>
      </section>
      
    
      

      
      <div style={{"height":"500px", "width" : "1000px"}}>
        <div className='mt-4'>
          <Map lat={ 35.10584586911908 } lng={128.9658011123337}/>
        </div>
      </div>
      
    </Layout>
  )
}

export default Home

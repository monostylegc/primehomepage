import type { NextPage } from 'next'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Map from '@components/map'
import ScrollSection from '@components/scrollsection'
import CardB from '@components/cardB'
import CardA from '@components/cardA'
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
      title='프라임병원' 
      description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsu will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)' />
      
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
      
      <ScrollSection title='이 달의 혜택'> 
        <CardB imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=31' title='코로나 후유증 진료'  link='#'/>
        <CardB imgurl='https://www.disc21.co.kr/webpanel/event/file_reader.php?ftype=image&event_code=38' title='통합 간병 서비스'  link='#'/>
        <CardB imgurl='https://www.disc21.co.kr/img/main/banner1.png' title='간호사 모집' link='#'/>
      </ScrollSection>
      
      <ScrollSection title='프라임 의료진'> 
        <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환'
        link='#'/>
        <CardA imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' description='뇌 척추질환' link='#'/>
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

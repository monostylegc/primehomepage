import type { NextPage } from 'next'

import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"

import ScrollSection from '@components/scrollsection'
import Hero from '@components/hero'
import Layout from '@components/layout'
import CardA from '@components/card'
import Feature from '@components/feature'
import GridSection from '@components/gridsection'


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

        <Feature title='프라임병원 척추신경외과는' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        />

        <ScrollSection title='척추센터 의료진' description='최고최고'>
           <CardA imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' description='뇌 척추질환' link='#'/>
           <CardA imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' description='척추질환' link='#'/>
        </ScrollSection>

    </Layout>
  )
}

export default Spine

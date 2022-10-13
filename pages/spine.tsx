import type { NextPage } from 'next'

import ScrollSection from '@components/scrollsection'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Card from '@components/card'
import Feature from '@components/feature'
import GridSection from '@components/gridsection'


const Spine: NextPage = () => {
 
  return (
    <Layout>
        <Hero title='프라임' subtitle='척추센터' imgurl='https://www.disc21.co.kr/img/main/main4.png' />
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' description='신경외과전문의' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' additional='원장' description='신경외과' subtitle='신경외과전문의' link='#'/>
        </GridSection>
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' link='#'/>
        </GridSection>
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' link='#'/>
        </GridSection>
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' link='#'/>
           
        </GridSection>
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' link='#'/>
        </GridSection>
        <div id="section"></div>
        <GridSection title='척추센터 의료진' description='최고최고'>
           <Card imgurl='/photo/원장님사진.jpg' title='최봉식' subtitle='신경외과전문의' link='#'/>
           <Card imgurl='/photo/이기창.jpg' title='이기창' subtitle='신경외과전문의' link='#'/>
        </GridSection>

    </Layout>
  )
}

export default Spine

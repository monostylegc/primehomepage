import type { NextPage } from 'next'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const i = []
  
  for(let v=0; v<100; v++){
    i.push(1)
  }

  return (
    <Layout>
      <Hero />
      { i.map(v=><p>안녕</p>) }
    </Layout>
  )
}

export default Home

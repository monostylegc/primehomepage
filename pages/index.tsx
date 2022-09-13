import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const i = []
  
  for(let v=0; v<100; v++){
    i.push(1)
  }

  return (
    <Layout>
      <p className=' font-bold text-6xl'>
        안녕하세요
      </p>
    </Layout>
  )
}

export default Home

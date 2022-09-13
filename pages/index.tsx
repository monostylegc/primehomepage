import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <p className=' font-bold text-6xl'>
        Hello
      </p>
      <img src='/logo.svg' className='w-24 h-24' />
    </Layout>
  )
}

export default Home

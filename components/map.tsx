import useKakao from "../libs/client/useKakao"
import { useState, useEffect } from "react"

interface MapProps {
  lat: number;
  lng: number;
}

function Map({lat, lng}:MapProps) {
    const [container, setContainer] = useState<HTMLDivElement | null>(null)

    const { kakao, map, services, putMarker } = useKakao(lat, lng, container)
    useEffect(() => {
      if (!kakao || !map) return;
  
      putMarker(lat, lng, () => {});
    }, [kakao, map, putMarker])

    return (
        <div className="rounded-[20px] w-full h-[50vh]" ref={setContainer}></div>
    )
}

export default function PrimeMap(){
  return (
    <div className='flex flex-col max-w-4xl mx-auto p-6 mb-20'>
        <h1 className="text-4xl flex-1 text-center mb-10">오시는 길</h1>
        <Map lat={ 35.10584586911908 } lng={128.9658011123337}/>
      
        <div className='flex items-center mt-8'>
          <p className='flex items-center text-base lg:text-lg ml-2 text-gray-600 w-16 shrink-0'>지하철</p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-red-500 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>1호선</p>
          </div>
          <p className=" flex-grow text-sm lg:text-base text-gray-600 ml-10">하단역 4번 출구 앞</p>
        </div>
        <div className='flex items-center mt-4'>
          <p className='flex items-centertext-base lg:text-lg ml-2 text-gray-600 w-16 shrink-0'>버스</p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-green-700 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>일반</p>
          </div>
          <div className="flex flex-grow text-sm lg:text-base items-center ml-10 gap-x-8 gap-y-2 flex-wrap">
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
          <div className="flex flex-grow text-sm lg:text-base items-center ml-10 gap-x-8 gap-y-2 flex-wrap">
            <span className='text-gray-600'>1005</span>
            <span className='text-gray-600'>2000</span>
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <p className='flex items-center text-lg lg:text-xl ml-2 text-gray-600 w-16 shrink-0'></p>
          <div className='flex items-center justify-center ml-4 rounded-full bg-blue-800 w-14 h-14 shrink-0'>
            <p className='text-white text-center text-sm lg:text-base'>좌석</p>
          </div>
          <div className="flex flex-grow text-sm lg:text-base items-center ml-10 gap-x-8 gap-y-2 flex-wrap">
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
          <div className="flex flex-grow text-sm lg:text-base items-center ml-10 gap-x-8 gap-y-2 flex-wrap">
            <span className='text-gray-600'>강서구3</span>
            <span className='text-gray-600'>강서구7</span>
            <span className='text-gray-600'>강서구9</span>
            <span className='text-gray-600'>강서구9-1</span>
            <span className='text-gray-600'>강서구9-2</span>
            <span className='text-gray-600'>강서구12</span>
            <span className='text-gray-600'>강서구13</span>
            <span className='text-gray-600'>강서구14</span>
            <span className='text-gray-600'>강서구15</span>
            <span className='text-gray-600'>강서구16</span>
            <span className='text-gray-600'>강서구17</span>
            <span className='text-gray-600'>강서구20</span>
            <span className='text-gray-600'>강서구21</span>
            <span className='text-gray-600'>사하구10</span>
          </div>
        </div>            
      </div>
  )
}
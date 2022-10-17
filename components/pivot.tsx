import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router';

interface PivotProps{
    title : string;
    description : string;
    link : string;
}

const variants: Variants = {
    offscreen: {
        opacity : 0,
        y: 100
    },
    onscreen: {
      y: 0,
      opacity : 1,
      transition: {
        type: "spring",
        duration: 2
      }
    }
  };

export default function Pivot({title, description, link} : PivotProps){
    const router = useRouter()

    return (
        <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 py-12 px-6 items-center max-w-4xl mx-auto mb-20">
            <div>
                <h3 className="text-4xl flex-1">{title}</h3>
                <p className="text-gray-500 mt-10 serif">{description}</p>
            </div>
            <div className='flex md:justify-end items-center cursor-pointer mt-10 lg:mt-0' onClick={()=>router.push(`${link}`)}>
                <h3 className='flex items-center justify-center w-full md:w-fit bg-secondary py-2 px-6 text-xl text-white rounded-lg 
                transition hover:bg-primary'>바로가기
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </h3>
            </div>
        </motion.section>
    )
}
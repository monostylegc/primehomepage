import { motion, Variants } from 'framer-motion'

interface testimonialProps{
    title : string;
    description : string;
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

export default function Testimonial({title, description} : testimonialProps){
    return (
        <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        viewport={{once:true}} className="flex flex-col py-24 justify-around items-center max-w-4xl mx-auto p-6 mb-20">
            <h1 className="text-4xl flex-1">{title}</h1>
            <p className="text-gray-500 mt-10 leading-10 serif">{description}</p>
        </motion.section>
    )
}
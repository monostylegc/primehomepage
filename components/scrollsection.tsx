import { motion, Variants } from 'framer-motion'

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

interface ScrollSectionProps {
    title: string;
    description? : string;
    children : React.ReactNode;
}

export default function ScrollSection({title,description, children} : ScrollSectionProps){
    return (
      <motion.section 
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{once:true}}
      className="flex flex-col max-w-4xl mx-auto p-6 mb-20 ">
          <h2 className="text-4xl text-center ">{title}</h2>
          <p className="mt-2 text-gray-400 text-center serif">{description}</p>
          <div className="flex flex-row flex-nowrap gap-12 mt-10 overflow-y-hidden overflow-x-scroll snap-x scrollbar-track-transparent">
              { children }
          </div>
      </motion.section>
    )
}
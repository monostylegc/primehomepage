import { FaHandMiddleFinger } from 'react-icons/fa'

export default function FAB(){
    return (
        <div className="fixed z-50 bottom-10 right-5 px-6 py-4 shadow-lg flex justify-center items-center cursor-pointer
         text-white text-sm text-center rounded-full bg-primary hover:bg-secondary hover:scale-110 
         transition-all duration-200">
           <FaHandMiddleFinger /> 진료예약
        </div>
    )
}
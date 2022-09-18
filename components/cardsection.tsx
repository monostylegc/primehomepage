import { ReactNode } from "react"

interface CardSectionProps {
    title: string;
    children : React.ReactNode;
}

export default function CardSection({title, children} : CardSectionProps){
    return (
        <section className='p-8 m-4 mx-auto max-w-7xl'>
        <h2 className='text-primary font-semibold text-3xl'>{title}</h2>
        <div className='mt-4 flex space-x-6 justify-start 
        overflow-x-scroll scrollbar-thumb-slate-600 scrollbar-thin'>
          {children}
        </div>
      </section>
    )
}
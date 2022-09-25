

interface ScrollSectionProps {
    title: string;
    description? : string;
    children : React.ReactNode;
}

export default function ScrollSection({title,description, children} : ScrollSectionProps){
    return (
        <section className='max-w-7xl bg-white mt-4 p-8 rounded-lg mx-auto'>
          <h2 className='text-primary text-5xl'>{title}</h2>
          <p className="text-gray-500 text-md mt-2"> {description }</p>
          <div className='mt-4 py-1 flex space-x-8 justify-start 
          overflow-x-scroll scrollbar-thumb-slate-300 scrollbar-thin'>
            {children}
          </div>
        </section>
    )
}
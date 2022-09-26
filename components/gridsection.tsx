interface GridSectionProps {
    title: string;
    description? : string;
    children : React.ReactNode;
}

export default function GridSection({title,description,children} : GridSectionProps){
    return (
        <section className='max-w-7xl bg-white mt-4 p-8 rounded-lg mx-auto'>
          <h2 className='text-primary text-5xl'>{title}</h2>
          <p className="text-gray-500 text-md mt-2"> {description }</p>
          <div className={`mt-4 py-1 gap-4 grid grid-cols-3 lg:grid-cols-5`}>
            {children}
          </div>
        </section>
    )
}
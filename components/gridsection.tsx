interface GridSectionProps {
    title: string;
    description? : string;
    mobile: number;
    desk: number;
    children : React.ReactNode;
}

export default function GridSection({title,description,mobile,desk,children} : GridSectionProps){
    return (
        <section className='max-w-7xl bg-white mt-4 p-8 rounded-lg mx-auto'>
          <h2 className='text-primary text-5xl'>{title}</h2>
          <p className="text-gray-500 text-md mt-2"> {description }</p>
          <div className={`mt-4 py-1 gap-4 grid grid-cols-${mobile} lg:grid-cols-${desk}`}>
            {children}
          </div>
        </section>
    )
}
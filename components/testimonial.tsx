
interface testimonialProps{
    title : string;
    description : string;
}

export default function Testimonial({title, description} : testimonialProps){
    return (
        <section className="flex flex-col py-16 justify-around items-center max-w-4xl mx-auto p-6 my-16
        transition-all 
        ">
            <h1 className="text-4xl flex-1">{title}</h1>
            <p className="text-gray-500 mt-10 leading-10 serif">{description}</p>
        </section>
    )
}
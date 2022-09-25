
interface FeatureProps {
    title : string;
  
    description : string;
}

export default function Feature({title, description}:FeatureProps) {
    return (
        <section className="max-w-7xl bg-white m-4 p-8 rounded-lg mx-auto">
            <h2 className="text-primary text-5xl">{title}</h2>
           
            <p className="mt-4 text-gray-600">{description}</p>
        </section>
    )
}
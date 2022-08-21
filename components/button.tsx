interface ButtonProps{
    title:string;
    color:string;
}

export default function Button({title, color}:ButtonProps){
    return(
        <button type="button" className={` text-white bg-${color}-600 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5`}>{ title }</button>
    )
}
import { useState, useRef, useEffect } from "react"
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('@components/quilleditor'), { ssr: false });
const TextViewer = dynamic(() => import('@components/quillview'), { ssr: false });

export default function Staffs() {
    const [htmlStr, setHtmlStr] = useState<string>('');

    // ref
    const viewContainerRef = useRef<HTMLDivElement>(null);

    // useEffect
    useEffect(() => {
        if(viewContainerRef.current) {
            viewContainerRef.current.innerHTML += htmlStr;
        }
    }, [htmlStr])
    
    return (
        <>
            <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            <TextViewer htmlStr={htmlStr} /> 
        </>
    )
}
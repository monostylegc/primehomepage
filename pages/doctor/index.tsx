import { useState, useRef, useEffect } from "react"
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('@components/quilleditor'), { ssr: false });
const TextViewer = dynamic(() => import('@components/quillviewer'), { ssr: false });

export default function Staffs() {
    const [htmlStr, setHtmlStr] = useState<string>('');

   
    return (
        <>
            <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            
            <br/>
            {htmlStr}
            <br/>
            <br/>
            <br/>
            <TextViewer htmlStr={htmlStr} /> 
        </>
    )
}
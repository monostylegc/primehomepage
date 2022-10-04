import { useState } from "react"
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('@components/editor'), { ssr: false });

export default function Staffs() {
    const [htmlStr, setHtmlStr] = useState("")
    
    return (
        <>
            <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
        </>
    )
}
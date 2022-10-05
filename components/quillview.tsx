import { useMemo } from 'react'
import ReactQuill from 'react-quill'

interface IEditor { 
    htmlStr: string;
}

export default function Viewer({ htmlStr } : IEditor) {
    const modules =  useMemo(() => ({
        toolbar:  false,  
    }), [])

    return (
        <ReactQuill
            value={htmlStr}
            readOnly={true}
            modules={modules}
            id="viewer"
        />
    )
}

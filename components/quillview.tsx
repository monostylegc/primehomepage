import ReactQuill from 'react-quill'

interface IEditor { 
    htmlStr: string;
}

export default function Viewer({ htmlStr } : IEditor) {
    const modules = {
        toolbar: false
        }
    return (
        <ReactQuill
            value={htmlStr}
            readOnly={true}
            modules={modules}
        />
    )
}

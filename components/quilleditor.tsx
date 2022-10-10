import { useRef, useMemo, useCallback } from 'react'

import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { RangeStatic } from 'quill'

import BlotFormatter from 'quill-blot-formatter'

Quill.register("modules/blotFormatter", BlotFormatter);

const ImageBase = Quill.import('formats/image');

const ATTRIBUTES = [
  'alt',
  'height',
  'width',
  'style' // This is the added difference that needs to be saved properly
];

class CustomImage extends ImageBase {
  declare domNode: any; // Needed declaration for Typescript

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      const copy = { ...formats };

      if (domNode.hasAttribute(attribute)) {
        copy[attribute] = domNode.getAttribute(attribute);
      }

      return copy;
    }, {});
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}

Quill.register('formats/image', CustomImage);


interface IEditor { 
    htmlStr: string;
    setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ htmlStr, setHtmlStr} : IEditor) {
    const quillRef = useRef<ReactQuill>(null);

      const imageHandler = useCallback(() => {
        // file input 임의 생성
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        
        input.click();

        input.onchange = async() => {
          const { uploadURL } = await (await fetch(`/api/files`)).json()
         
          if(quillRef.current) {
                const file = input.files;
                const formData = new FormData();
    
                if(file) {
                    formData.append("file", file[0]);
                }
  
                // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
                const index = (quillRef.current.getEditor().getSelection() as RangeStatic).index;

                const quillEditor = quillRef.current.getEditor();
                quillEditor.setSelection(index, 1);

                try {
                    // file 데이터 담아서 서버에 전달하여 이미지 업로드
                    const {
                        result : { id }
                    } = await (await fetch(uploadURL, { method: 'POST', body: formData })).json()
                    
                    const url = `https://imagedelivery.net/IiTY7pTorrOvvCNvIBpczw/${id}/public`
                    
                    quillEditor.deleteText(index, 1)

                    //quillEditor.clipboard.dangerouslyPasteHTML(index,`<img src="https://imagedelivery.net/IiTY7pTorrOvvCNvIBpczw/${id}/public" />`)
                    quillEditor.insertEmbed(index, "image", url)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }, [])
    // useMemo를 사용하지 않고 handler를 등록할 경우 타이핑 할때마다 focus가 벗어남
    const modules = useMemo(() => ({
        blotFormatter: {},
        toolbar: {
            // container에 등록되는 순서대로 tool 배치
            container: [
                [{ 'font': [] }], // font 설정
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // header 설정
                ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'], // 굵기, 기울기, 밑줄 등 부가 tool 설정
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // 리스트, 인덴트 설정
                ['image', 'video'], // 링크, 이미지, 비디오 업로드 설정
                [{ 'align': [] }, { 'color': [] }, { 'background': [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
                ['clean'], // toolbar 설정 초기화 설정
            ],

            handlers: {
                image : imageHandler, // 이미지 tool 사용에 대한 핸들러 설정
            },
        },  
    }), [])

    // toolbar에 사용되는 tool format
    const formats = [
        'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'image', 'video',
        'align', 'color', 'background',        
    ]

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow" 
            modules={modules} 
            formats={formats} 
            value={htmlStr} 
            placeholder='본문을 입력하세요'
            onChange={(content, delta, source, editor) => setHtmlStr(editor.getHTML())} 
            className="border"
            />
    )
}

import { NextPage } from 'next';

import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import { useEffect, useRef } from 'react';

interface IEditor {
    htmlStr: string;
    setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: NextPage<IEditor> = ({ htmlStr, setHtmlStr }) => {

    const editorRef = useRef<ToastEditor>(null);

    // Editor Change 이벤트
    const onChangeEditor = () => {
        if(editorRef.current) {
            setHtmlStr(editorRef.current.getInstance().getHTML());
        }
    }

    useEffect(() => {
        if(editorRef.current) {
            // 전달받은 html값으로 초기화
            editorRef.current.getInstance().setHTML(htmlStr);

            // 기존 이미지 업로드 기능 제거
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            // 이미지 서버로 데이터를 전달하는 기능 추가
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                (async () => {
                    const { uploadURL } = await (await fetch(`/api/files`)).json()
                    console.log(uploadURL)
                    console.log(blob)
                    const formData = new FormData();
                    formData.append("file", blob);

                    const {
                        result : { id }
                    } = await (await fetch(uploadURL, { method: 'POST', body: formData })).json()
                    console.log(id)
                    callback(`https://imagedelivery.net/IiTY7pTorrOvvCNvIBpczw/${id}/public`, id.toString());
                  })();
        
                return false;
            });
        }
    }, [htmlStr])

    return (
        <ToastEditor
            initialValue=""
            previewStyle="vertical"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            plugins={[colorSyntax]}
            onChange={onChangeEditor}
            height='auto'
        />
    )
}

export default Editor;
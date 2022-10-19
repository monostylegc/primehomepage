import type { NextPage } from 'next'
import { DiseaseInfo } from "@prisma/client";
import Button from '@components/button';
import Input from '@components/input';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';

const TextEditor = dynamic(() => import('@components/quilleditor'), { ssr: false });

interface UploadDiseaseInfoForm {
    title: string;
    catergory: string;
    image: FileList;
    content: string;
}

interface UploadDiseaseInfotMutation {
    ok: boolean;
    diseaseinfo : DiseaseInfo;
}


const Upload: NextPage = () => {
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm<UploadDiseaseInfoForm>();
    const [ uploadDiseaseInfo, {loading : mutationLoading, data} ] = useMutation<UploadDiseaseInfotMutation>("/api/diseaseinfo")
    const [ loading, setLoading ] = useState(false)
    const [htmlStr, setHtmlStr] = useState<string>('');

    const onValid = async ({ title, catergory, image, content }: UploadDiseaseInfoForm) => {
        if (loading) return

        if (image && image.length > 0) {
            try {
                setLoading(true)
                const { uploadURL } = await (await fetch(`/api/files`)).json();
                
                const formData = new FormData();
                
                formData.append('file', image[0],title);
                
                const {
                    result : { id }
                } = await (await fetch(uploadURL, { method: 'POST', body: formData })).json()
                
                content = htmlStr
                uploadDiseaseInfo({ title, catergory, content, imageId :id });
                setLoading(false)
            }
            catch (e) {
                console.log(e)
            }
            console.log(data)
        } else {
            setLoading(true)
            content = htmlStr
            uploadDiseaseInfo({ title, catergory, content })
            setLoading(true)
            console.log(data)
        }
    }

    const image = watch('image');
    const [imagePreview, setImagePreview] = useState('');
    useEffect(() => {
      if (image && image.length > 0) {
        const file = image[0];
        setImagePreview(URL.createObjectURL(file));
      }
    }, [image]);

    return (
        <div>
            <form className="p-4 space-y-8" onSubmit={handleSubmit(onValid)}>
                <Input register={register('title', { required: true })} required label="Title" name="title" type="text" />
                <div className='flex flex-col'>
                    <label htmlFor="category" className="mb-1 block text-sm font-medium text-gray-600">Category</label>
                    <div className='rounded-md border border-gray-300 shadow-sm'>
                        <select {...register("catergory")} className="text-sm w-full text-gray-600 py-2.5 px-1 rounded-md">
                            <option value="ns" >NS</option>
                            <option value="os">OS</option>
                            <option value="im">IM</option>
                        </select>
                    </div>
                </div>
                {imagePreview ? (
                    <img
                    src={imagePreview}
                    className='w-full h-46 text-gray-600 aspect-video rounded-md object-fit'
                    alt='photoPreview'
                    />
                    ) :
                    <label className="w-full cursor-pointer text-gray-600 hover:border-primary hover:text-primary flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                        <svg
                            className="h-12 w-12"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input className="hidden" type="file" {...register('image')}/>
                    </label> 
                    }
                
                <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr}/>

                <Button text={'Upload'} loading={loading}/>
            </form>
        </div>
    )
}

export default Upload

import useSWR from "swr";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import { DiseaseInfo } from "@prisma/client";


const TextViewer = dynamic(() => import('@components/quillviewer'), { ssr: false });

interface DiseaseInfoDetailResponse {
	ok: boolean;
	diseaseInfo: DiseaseInfo;
}

const DiseaseInfoDetail : NextPage = () => {
    const router = useRouter()
    const { data } = useSWR<DiseaseInfoDetailResponse>(`api/diseaseinfo/${router.query.id}`)

    return (
        <Layout>
            {
                data ? 
                <div className="max-w-xl mx-auto space-y-12 my-32 px-2">
                    <h1 className="text-3xl text-center font-bold"> { data?.diseaseInfo.title } </h1>
                    <div className="bg-slate-500 w-full aspect-video rounded-[20px] " />
                    <TextViewer htmlStr={ data?.diseaseInfo.content } /> 
                    <hr />
                </div> : <div>404</div>
            }
                 
        </Layout>
    )
}

export default DiseaseInfoDetail
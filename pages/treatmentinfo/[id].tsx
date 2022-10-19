import useSWR from "swr";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import { TreatmentInfo } from "@prisma/client";

const TextViewer = dynamic(() => import('@components/quillviewer'), { ssr: false });

interface TreatmentInfoDetailResponse {
	ok: boolean;
	treatmentInfo: TreatmentInfo;
}

const TreatmentInfoDetail : NextPage = () => {
    const router = useRouter()
    const { data } = useSWR<TreatmentInfoDetailResponse>(`/api/treatmentinfo/${router.query.id}`)

    return (
        <Layout>
            {
                data?.treatmentInfo ? 
                <div className="max-w-xl mx-auto space-y-12 my-32 px-2">
                <h1 className="text-3xl text-center font-bold"> { data?.treatmentInfo.title } </h1>
                {
                    data?.treatmentInfo.image ?
                    <img src={`https://imagedelivery.net/IiTY7pTorrOvvCNvIBpczw/${data.treatmentInfo.image}/public`}
                    className="bg-slate-500 w-full aspect-video rounded-[20px] object-cover"
                    /> :
                    <div className="bg-slate-500 w-full aspect-video rounded-[20px] " />}
               
                    <TextViewer htmlStr={ data?.treatmentInfo.content } /> 
               
                </div>
                : null

            }    
           
        </Layout>
    )
}

export default TreatmentInfoDetail
import useSWR from "swr";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import { DiseaseInfo } from "@prisma/client";


interface DiseaseInfoDetailResponse {
	ok: boolean;
	diseaseInfo: DiseaseInfo;
}

const DiseaseInfoDetail : NextPage = () => {
    const router = useRouter()
    const { data } = useSWR<DiseaseInfoDetailResponse>(`api/diseaseinfo/${router.query.id}`)

    return (
        <Layout>
            <div className="max-w-xl mx-auto space-y-12 my-32 px-2">
                <h1 className="text-3xl text-center font-bold"> title </h1>
                <div className="bg-slate-500 w-full aspect-video rounded-[20px] " />
                <div>
                    <h1>안녕하세요 우리는 배치깁니다. 안녕하세요 우리는 배치깁니다.
                    안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.
                    안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.
                    안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.안녕하세요 우리는 배치깁니다.
                    </h1>
                </div>
                <hr />
            </div>     
        </Layout>
    )
}

export default DiseaseInfoDetail
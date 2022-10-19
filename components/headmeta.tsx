import Head from "next/head";

interface headMetaProps {
    title : string;
    description : string;
    url : string;
    image : string;
}

const HeadMeta = ({ title, description, url, image } : headMetaProps) => {
  return (
    <Head>
      <title>{title || "프라임병원"}</title>
      <meta
        name="description"
        content={
          description ||
          "부산 사하구 강서구 척추 관절 대표 병원 프라임 병원"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "프라임병원"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://primehospital.busan.kr"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="프리암병원" />
    </Head>
  );
};

export default HeadMeta;

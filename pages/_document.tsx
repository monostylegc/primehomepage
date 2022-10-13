import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        {/* 여기서 이렇게 preload하니까 플리커링 없어짐 */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, 
          maximum-scale=1.0, minimum-scale=1.0" />
          {/* coords얻는곳 */}
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APIKEY}&libraries=services&autoload=false`}
            async
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
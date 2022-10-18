import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from "swr";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<SWRConfig
			value={{
				fetcher: (url: string) =>
					fetch(url).then((response) => response.json()),
			}}
		>
		<Head>
        	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, 
         	maximum-scale=1.0, minimum-scale=1.0" />
	    </Head>
			<div>
				<Component {...pageProps} />
			</div>
		</SWRConfig>
	);
}

export default MyApp

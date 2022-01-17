import '../styles/globals.css'
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <title>My blog</title>
                <meta content={"my blog"}/>
                <meta title={"my blog"}/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

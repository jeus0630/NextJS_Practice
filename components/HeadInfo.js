import React from 'react';
import Head from "next/head";
const HeadInfo = ({title='My Blog', keyword='Blog powered by Nextjs', content='practice nextjs'}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keyword={keyword}/>
                <meta content={content}/>
            </Head>
        </div>
    );
};

export default HeadInfo;
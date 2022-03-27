import React, { FunctionComponent } from 'react'
import Head from "next/head";

type Props = {
    title: string
    description: string
    keywords: string
}

const DocumentHead: FunctionComponent<Props> = ({title, description, keywords }) => {
    return (
        <Head>
            <title>{title} | Beluga</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <link rel="icon" href="/dot-homecoming_visual_app-icon.svg"/>
        </Head>
    )
}

export default DocumentHead
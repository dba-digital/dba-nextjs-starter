import { FunctionComponent } from "react";
import DocumentHead from "../modules/DocumentHead/DocumentHead";
import Header from "../modules/Header/Header";

type Props = {
    title: string
    description: string
    keywords: string
    children: any
}

const LayoutDefault: FunctionComponent<Props> = ({title, description, keywords, children}) => {
    return (
        <>
            <DocumentHead title={title} description={description} keywords={keywords}/>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutDefault;
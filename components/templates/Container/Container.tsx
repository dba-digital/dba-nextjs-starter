import { FunctionComponent } from "react";

type Props = {
    section?: boolean | true
    children: any
    className?: string
}

const Container: FunctionComponent<Props> = ({ section, children, className }) => {
    const isSection: boolean = section !== undefined ? section : true
    const ContainerTag: any = isSection ? 'section' : 'div'

    return (
        <ContainerTag className={`
            grid 
            grid-cols-container-xs 
            sm:grid-cols-container-sm 
            md:grid-cols-container-md 
            xl:grid-cols-container-lg 
            2xl:grid-cols-container-2xl
            ${className ? className : ''}
        `}>
                {children}
        </ContainerTag>
    )
}

export default Container
import { FunctionComponent } from "react";

type Props = {
    level: number
    size?: string
    align?: string
    children: any
    className?: string
}

const Headline: FunctionComponent<Props> = ({ level, size, align, children, className }) => {
    const HeadlineTag: any = `h${level}`

    const textSizeMap: any = {
        'xs': 'text-lg',
        'sm': 'text-xl',
        'base': 'text-2xl',
        'lg': 'text-3xl',
        'xl': 'text-4xl',
        '2xl': 'text-5xl',
        '3xl': 'text-6xl',
        '4xl': 'text-7xl'
    }
    const textSize = size ? textSizeMap[size] : 'text-2xl'

    const textAlignMap: any = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right',
        'justify': 'text-justify'
    }
    const textAlign = size ? textAlignMap[size] : ''

    return (
        <HeadlineTag className={`
            ${textSize} 
            ${textAlign}
            font-bold
            text-secondary-700
            col-[small-inner]
            ${className ? className : ''}
        `}>
                {children}
        </HeadlineTag>
    )
}

export default Headline;
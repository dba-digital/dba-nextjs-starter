import { FunctionComponent } from "react";

type Props = {
    tag?: string
    size?: string
    align?: string
    children: any
    className?: string
}

const Text: FunctionComponent<Props> = ({ tag, size, align, children, className }) => {
    let tagName: string
    switch (tag) {
        case 'p':
            tagName = 'p'
            break;
        case 'span':
            tagName = 'span'
            break;
        case 'small':
            tagName = 'small'
            break;
        case 'div':
            tagName = 'div'
            break;
        default:
            tagName = 'p'
    }
    const TextTag: any = tagName

    const textSizeMap: any = {
        'xs': 'text-sm',
        'sm': 'text-base',
        'base': 'text-lg',
        'lg': 'text-xl',
        'xl': 'text-2xl',
        '2xl': 'text-3xl',
        '3xl': 'text-4xl',
        '4xl': 'text-5xl'
    }
    const textSize = size ? textSizeMap[size] : 'text-lg'

    const textAlignMap: any = {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right',
        'justify': 'text-justify'
    }
    const textAlign = size ? textAlignMap[size] : ''

    return (
        <TextTag className={`
            ${textSize}
            ${textAlign}
            text-secondary-700
            col-[small-inner]
            ${className ? className : ''}
        `}>
                {children}
        </TextTag>
    )
}

export default Text;
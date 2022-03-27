import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

type Props = {
    label: string
    path: string
    scroll?: boolean
    replace?: boolean
    shallow?: boolean
}

const NavigationItem: FunctionComponent<Props> = ({ label, path, scroll, replace, shallow  }) => {
    const router = useRouter();

    return (
        <li
            role="menuitem"
            className="
                w-full block
                group md:relative md:py-5 md:w-auto md:inline-block
                ">
            <Link
                href={path}
                scroll={scroll !== undefined ? scroll : true}
                replace={replace !== undefined ? replace : false}
                shallow={shallow !== undefined ? shallow : false}
                passHref
            >
                <a
                    className={`
                        px-5 py-2.5 flex gap-2.5 justify-center items-center relative transition-colors duration-250 rounded-xl
                        group-hover:bg-primary-50
                        ${router.pathname == path ? "text-primary" : "text-secondary-700"}
                `}>
                    <span className="text-lg">
                        {label}
                    </span>
                </a>
            </Link>
        </li>
    )
}

export default NavigationItem
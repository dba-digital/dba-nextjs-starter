import React, { FunctionComponent } from 'react'
import NavigationItem from "./NavigationItem";

const Navigation: FunctionComponent = () => {
    const menuItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Features',
            path: '/features'
        },
        {
            label: 'Docs',
            path: '/docs'
        },
        {
            label: 'Pricing',
            path: '/pricing'
        },
        {
            label: 'Contact',
            path: '/contact'
        }
    ]

    return (
        <nav className="bg-white border-b-[1px] border-secondary-100 top-0 z-[1000] relative">
            <ul
                className="
                    absolute left-5 sm:left-10 right-5 sm:right-10 top-[85%] bg-white shadow-lg p-5 rounded-xl border-[1px] border-secondary-100
                    flex items-center flex-wrap md:static md:top-['auto'] md:left-['auto'] md:right-['auto'] md:bg-none md:shadow-none md:p-0 md:border-none"
            >
                {menuItems.map((item) =>
                    <NavigationItem key={item.path} label={item.label} path={item.path} />
                )}
            </ul>
        </nav>
    )
}

export default Navigation
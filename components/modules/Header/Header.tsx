import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Container from "../../templates/Container/Container";
import Navigation from "../Navigation/Navigation";

const Header: FunctionComponent = () => {
    return (

        <div className="bg-white border-b-[1px] border-secondary-100 top-0 z-[1000] relative">
            <Container>
                <div className="w-full flex justify-between items-center md:space-x-10 [grid-area:large]">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href='/' passHref>
                            <a>
                                <span className="sr-only">465miles</span>
                                <img className="h-6 w-auto" src='vercel.svg' alt=""/>
                            </a>
                        </Link>
                    </div>
                    <Navigation/>
                </div>
            </Container>
        </div>
    )
}

export default Header
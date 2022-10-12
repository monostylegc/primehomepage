import Link from "next/link"
import { useState } from "react"
import { cls } from "@libs/client/utils"

import styled from 'styled-components';

const nav = styled.nav`

`

export default function Nav(){
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return(
        <header>
            <nav>
                <div>PRIME</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
            <ul>
                <li>진료안내</li>
            </ul>
        </header>
    )
}
import React from 'react';
import Link from "next/link";
import * as navStyles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a href="">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/photos"}>
                        <a href="">photos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
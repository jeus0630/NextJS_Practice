import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav>
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
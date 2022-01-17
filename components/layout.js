import React from 'react';
import Nav from "./nav";
const Layout = ({children}) => {
    return (
        <>
            <Nav></Nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;

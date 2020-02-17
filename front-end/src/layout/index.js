import React from 'react';
import Header from './header';
import Footer from './footer';
export default (props) => {
    return (
        <>
            <Header />
            <div className="container mt-3">
                {props.children}
                <Footer />
            </div>
        </>
    )
}
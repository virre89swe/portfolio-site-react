import React from 'react';

const Header = () => (
    <section className="header">
        <span className="animatedText"><h1>Portfolio Viktor Karlsson <i className="fas fa-heart" style={{color:'red'}}></i></h1></span>
        <span><img className='circularImg' src='/assets/images/circularImgMobile.jpg'/></span>
    </section>
);

export default Header;
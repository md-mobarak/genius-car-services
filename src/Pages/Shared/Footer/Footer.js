import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <p className='text-center'><small>&copy;CopyRight{(new Date().getFullYear())}</small></p>
        </footer>
    );
};

export default Footer;
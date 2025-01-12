import React from "react";
import { useState } from 'react';

const Footer = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="footer">
            {/* {count} views */}
            Made by @<a
                href="https://x.com/MayurCaariappa"
                target="_blank">MayurCaariappa</a>
        </div>
    );
};

export default Footer;
import React from 'react';
import {useLocation} from "react-router-dom";


function NavigationLink({link}: any) {
    return (
        <div className="navigation__links">
            {useLocation().pathname === link.pathName && <div className="navigation__divider"/>}
            <img
                src={useLocation().pathname === link.pathName ? link.active : link.default}
            />
            <div
                className={useLocation().pathname === link.pathName ? 'navigation__active-link' : 'navigation__link'}

            >
                {link.name}
            </div>
        </div>
    );
}

export default NavigationLink;

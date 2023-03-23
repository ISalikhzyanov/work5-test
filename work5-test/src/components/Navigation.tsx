import React from 'react';
import logo from '../assets/img/navigation-images/logo.svg'
import logout from '../assets/img/navigation-images/logout.svg'
import '../assets/styles/components/navigation.scss'
import {navigationObject} from "../variables/Navigation";
import NavigationLink from "./NavigationLink";
import {Link} from "react-router-dom";



function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__logo">
                <img
                    src={logo}
                />
            </div>
            <div className="navigation__links-column">
                <Link to="/" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.home} />
                </Link>
                <Link to="/markets" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.markets} />
                </Link>
                <Link to="/promo" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.promo} />
                </Link>
                <Link to="/statistic" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.statistic} />
                </Link>
                <Link to="/balance" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.balance} />
                </Link>
                <Link to="/personal" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.personal} />
                </Link>
                <Link to="/faq" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.faq} />
                </Link>
                <Link to="/support" className="navigation__link-parent-component">
                    <NavigationLink link={navigationObject.support} />
                </Link>
                <div className="navigation__links">
                    <img
                        src={logout}
                    />
                    <span className="navigation__logout">Выход</span>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

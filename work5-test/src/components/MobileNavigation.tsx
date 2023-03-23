import React, {useState} from 'react';
import logo from '../assets/img/navigation-images/logo.svg'
import logout from '../assets/img/navigation-images/logout.svg'
import '../assets/styles/components/navigation.scss'
import {navigationObject} from "../variables/Navigation";
import NavigationLink from "./NavigationLink";
import {Link} from "react-router-dom";
import arrowRight from '../assets/img/arrow-right-square-fill.svg'
import arrowLeft from '../assets/img/arrow-left-square-fill.svg'


function MobileNavigation() {
    const [showNavigation, setShowNavigation] = useState(false)
    function showMobNavigation () {
        setShowNavigation(true)
    }

    function hideMobNavigation () {
        setShowNavigation(false)
    }
    return (
        <div>
            {!showNavigation && <img onClick={showMobNavigation} src={arrowRight} width="25" height="25" className="mobile-navigation__open-btn"/>}
            {showNavigation && <div className="mobile-navigation">
                <div className="navigation__logo mobile">
                    <img
                        src={logo}
                    />
                    <img onClick={hideMobNavigation} src={arrowLeft} width="25" height="25"/>
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
            </div>}
        </div>
    );
}

export default MobileNavigation;

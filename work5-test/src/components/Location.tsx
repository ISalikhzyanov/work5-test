import React from 'react';
import {Link, useLocation} from "react-router-dom";
import arrow from '../assets/img/arrow.svg'
import '../assets/styles/components/location.scss'

function Location() {
    let location = useLocation()
    function getPathname () {
        switch (location.pathname){
            case '/markets':
                return 'Мои магазины'
            case '/promo':
                return 'Промоматериалы'
            case '/statistic':
                return 'Статистика'
            case '/balance':
                return 'Баланс'
            case '/personal':
                return 'Персональные данные'
            case '/faq':
                return 'FAQ'
            case '/support':
                return 'Техническая поддержка'
        }
    }
    return (
        <div className="location">
            { location.pathname !== '/' && <Link to="/" className="location__home">Главная</Link>}
            { useLocation().pathname !== '/' && <div className="location__page-name">
                <img src={arrow}/>
                <span className="text-lg-start">{getPathname()}</span>
            </div> }
        </div>
    );
}

export default Location;

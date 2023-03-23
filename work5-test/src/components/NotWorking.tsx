import React from 'react';
import '../assets/styles/components/not-working.scss'
import emoji from '../assets/img/not-working/emoji-smile-upside-down.svg'
import wrench from '../assets/img/not-working/wrench-adjustable.svg'
import Location from "./Location";

function NotWorking() {
    return (
        <div className="not-working">
            <Location />
            <h1>Упс! Что-то пошло не так!</h1>
            <div className="not-working__images">
                <img src={emoji} width="44" height="44"/>
                <img src={wrench} width="44" height="44"/>
            </div>
            <p className="not-working__description">По техническим причинам страница временно не доступна! Приносим извинения за причененные неудобства.</p>
        </div>
    );
}

export default NotWorking;

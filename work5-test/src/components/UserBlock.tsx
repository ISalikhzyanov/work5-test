import React, {useState} from 'react';
import '../assets/styles/components/user-block.scss'
import envelope from '../assets/img/user-block/envelope.svg'
import envelopeCircle from  '../assets/img/user-block/envelope-circle.svg'
import {IUser} from "../types/User";

function UserBlock({user}: {user: IUser}) {
    const [showDropdown,setShowDropdown] = useState(false)
    function handleChange () {
        setShowDropdown(!showDropdown)
    }
    return (
        <div className="user-block">
            <div className="user-block__messages">
                <div className="user-block__letter-img">
                    <img
                        src={envelope}
                        className="user-block__envelope"
                    />
                    <img
                        className="user-block__envelope-circle"
                        src={envelopeCircle}
                    />
                </div>
            </div>
            <div onClick={handleChange} className="user-block__user">
                <img
                    src={user.img}
                    className="user-block__user-photo"
                />
                <span>{user.name}</span>
                {showDropdown && <ul className="user-block__dropdown">
                    <li className="user-block__dropdown__item">Открыть профиль</li>
                </ul>}
            </div>
            {/*@ts-ignore*/}
            <div onClick={handleChange} className="user-block__user popover">
                <img src={user.img} className="user-block__user-photo" alt="no"/>
                {showDropdown && <ul className="user-block__dropdown">
                    <li className="user-block__dropdown__username">{user.name}</li>
                    <li className="user-block__dropdown__item">Открыть профиль</li>
                </ul>}
            </div>
        </div>
    );
}

export default UserBlock;

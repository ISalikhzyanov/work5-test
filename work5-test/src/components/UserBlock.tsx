import React, {useEffect, useRef} from 'react';
import '../assets/styles/components/user-block.scss'
import envelope from '../assets/img/user-block/envelope.svg'
import envelopeCircle from  '../assets/img/user-block/envelope-circle.svg'
import {IUser} from "../types/User";
//@ts-ignore
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"

function UserBlock({user}: {user: IUser}) {
    const popoverRef = useRef()
    useEffect(() => {
        const popover = new bootstrap.Popover(popoverRef.current, {
            content: user.name,
            title: "Пользователь"
        })
    })
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
            <div className="user-block__user">
                <img
                    src={user.img}
                    className="user-block__user-photo"
                />
                <span>{user.name}</span>
            </div>
            {/*@ts-ignore*/}
            <div className="user-block__user popover" ref={popoverRef} >
                <img src={user.img} className="user-block__user-photo" alt="no"/>
            </div>
        </div>
    );
}

export default UserBlock;

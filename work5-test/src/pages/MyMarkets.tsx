import React, {useEffect, useState} from 'react';
import Location from "../components/Location";
import '../assets/styles/pages/markets.scss'
import BaseButton, {IBtn} from "../components/UI/BaseButton";
import MarketsTable from "../components/MarketsTable";
import userPhoto from "../assets/img/user-block/user-photo.svg"
import {IUser} from "../types/User";
import UserBlock from "../components/UserBlock";
import BasePopup from "../components/UI/BasePopup";
import MarketsPopup from "../components/popups/MarketsPopup";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, hideEditPopup} from "../redux/actions";
import Loader from "../components/UI/Loader";
import loader from "../components/UI/Loader";
import EditPopup from "../components/popups/EditPopup";

function MyMarkets() {
    // @ts-ignore
    const projects = useSelector(state => state.project.projects)
    // @ts-ignore
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
    const [showPopup, setShowPopup] = useState(false)
    const showEditPopup = useSelector((state: any) => state.app.showEditPopup)

    useEffect(()=>{
        if(!projects.length){
            // @ts-ignore
            dispatch(fetchProjects())
        }
    },[dispatch, projects.length])




    function showOrHidePopup () {
        setShowPopup(!showPopup)
    }

    const popup = ()=> {
        return <MarketsPopup cancel={ (showOrHidePopup) } />
    }

    const editPopup = ()=> {
        return <EditPopup cancel={() => dispatch(hideEditPopup())}/>
    }

    const user: IUser = {
        img: userPhoto,
        name: 'Максим Добжанский'
    }
    const addBtn: IBtn = {
        color: 'green',
        img: 'add'
    }

    return (
        <div className="container markets">
            { showPopup && <BasePopup title="Создать магазин" component={popup()} showOrHide={showOrHidePopup}/> }
            { showEditPopup && <BasePopup
                title="Редактировать магазин"
                component={editPopup()}
                showOrHide={() => dispatch(hideEditPopup())}
            />  }
            <Location />
            <UserBlock user={user} />
            <div
                className="markets__btn"
                onClick={showOrHidePopup}
            >
                <BaseButton btn={addBtn} text="Создать свой магазин"/>
            </div>
            <h3>Управление магазинами</h3>
             <MarketsTable projects={projects}/>
            {loading && <div className="markets__loader">
                <Loader width="60px" height="60px"/>
            </div>}
        </div>
    );
}

export default MyMarkets;

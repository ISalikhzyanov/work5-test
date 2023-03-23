import React, {useState} from 'react';
import '../../assets/styles/components/edit-popup.scss'
import warning from '../../assets/img/warning.svg'
import BaseButton, {IBtn} from "../UI/BaseButton";
import BasInput from "../UI/BasInput";
import {useDispatch, useSelector} from "react-redux";
import {IProject} from "../../types/Markets";
import {addNewProject, hideEditPopup, removeFromProjects} from "../../redux/actions";

function EditPopup ({ cancel }: any) {
    const dispatch = useDispatch()
    const projects = useSelector((state: any) => state.project.projects)
    const [state, setState] = useState({
        number: 0,
        name: '',
        sample: '',
        colorScheme: '',
        url: ''
    });

    const {name, url} = state

    const editBtn: IBtn = {
        img: '',
        color: 'green'
    }

    const editProject: IProject = useSelector((state: any) => state.project.editProject)

    const cancelBtn: IBtn =  {
        img: '',
        color: 'gray'
    }

    function handleClick (prevState: IProject, newState: IProject) {
        newState.number = prevState.number
        if(newState.url === ''){
            newState.url = prevState.url
        }

        if(newState.name === ''){
            newState.name = prevState.name
        }
        const objIndex = projects.findIndex(((p: any) => p.number === prevState.number))
        projects[objIndex] = newState
        dispatch(hideEditPopup())
    }

    const handleChange = React.useCallback(({ target: { name, value } }: any) => {
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, [])

    return (
        <div className="edit-popup">
            <BasInput
                label="№"
                required
                readOnly={true}
                type="text"
                name="number"
                value={JSON.stringify(editProject.number)}
                onChange={handleChange}
            />
            <BasInput
                label="Название"
                required
                type="text"
                name="name"
                placeholder={editProject.name}
                value={name}
                onChange={handleChange}
            />
            <BasInput
                label="Адрес"
                required
                type="text"
                name="url"
                placeholder={editProject.url}
                value={url}
                onChange={handleChange}
            />
            <div className="markets-popup__warning">
                <img
                    src={warning}
                    className="markets-popup__warning__img"
                />
                <div className="markets-popup__warning__text">
                    В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5.
                    После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru).
                    Подробнее по <a>ссылке</a>
                </div>
            </div>
            <div className="markets-popup__btns">
                <div onClick={cancel} className="markets-popup__btn">
                    <BaseButton btn={cancelBtn} text="Отмена"/>
                </div>
                <div onClick={() => handleClick(editProject, state)} className="markets-popup__btn">
                    <BaseButton btn={editBtn} text="Редактировать"/>
                </div>
            </div>
        </div>
    );
}

export default EditPopup;

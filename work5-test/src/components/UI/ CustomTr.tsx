import React from 'react';
import BaseButton, {IBtn} from "./BaseButton";
import {IProject} from "../../types/Markets";
import {useDispatch} from "react-redux";
import {getEditProject, removeFromProjects, showEditPopup} from "../../redux/actions";


function CustomTr({project}: {project: IProject}) {
    const dispatch = useDispatch()
    const editBtn: IBtn = {
        img: 'edit',
        color: 'green'
    }
    const removeBtn: IBtn = {
        img: 'remove',
        color: 'gray'
    }

    function removeProject (item: IProject){
        dispatch(removeFromProjects(item))
    }

    function showPopup (item: IProject) {
        dispatch(showEditPopup())
        dispatch(getEditProject(item))
    }


    return (
        <tr className="dividered">
            <td className="markets-table__text"><div className="markets-table__text-container">{project.number}</div></td>
            <td className="markets-table__text"><div className="markets-table__text-container">{project.name}</div></td>
            <td className="markets-table__text"><div className="markets-table__text-container">{project.url}</div></td>
            <td className="markets-table__text">
                <div className="markets-table__btns">
                    <div onClick={() => showPopup(project)} className="markets-table__btn">
                        <BaseButton btn={editBtn} text="Редактировать" />
                    </div>
                    <div onClick={()=> removeProject(project)} className="markets-table__btn">
                        <BaseButton btn={removeBtn} text="Удалить" />
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default CustomTr;

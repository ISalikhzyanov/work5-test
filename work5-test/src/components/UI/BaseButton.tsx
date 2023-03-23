import React from 'react';
import add from '../../assets/img/add.svg'
import edit from '../../assets/img/edit.png'
import remove from '../../assets/img/remove.svg'
import '../../assets/styles/components/base-button.scss'
export interface IBtn  {
    img: string,
    color: string

}

function BaseButton({ btn, text } : { btn: IBtn, text: string }) {
    function getBtnImage () {
        switch (btn.img){
            case 'add':
                return add;
            case 'edit':
                return edit;
            case 'remove':
                return remove;
        }
    }

    function getBtnColor () {
        switch (btn.color){
            case 'green':
                return 'base-button green';
            case 'gray':
                return 'base-button gray'
        }
    }

    return (
        <div className={getBtnColor()}>
            <img src={getBtnImage()}/>
            <span className="base-button__text">{text}</span>
        </div>
    );
}

export default BaseButton;

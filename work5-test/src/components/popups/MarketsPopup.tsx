import React from 'react';
import '../../assets/styles/components/markets-popup.scss'
import warning from '../../assets/img/warning.svg'
import BaseButton, {IBtn} from "../UI/BaseButton";
import BaseSelect from "../UI/BaseSelect";

function MarketsPopup({ cancel }: any) {
    const createBtn: IBtn = {
        img: '',
        color: 'green'
    }

    const cancelBtn: IBtn =  {
        img: '',
        color: 'gray'
    }

    const sampleOptions = [
        {
            id: 1,
            value: 'Стандартный'
        },
        {
            id: 2,
            value: 'Новый'
        },
        {
            id: 3,
            value: 'Кастомный'
        },
    ]

    const colorSchemeOptions = [
        {
            id:1,
            value: 'Класическая'
        },
        {
            id:2,
            value: 'Темная'
        },
        {
            id:3,
            value: 'Кастомная'
        }
    ]

    return (
        <div className="markets-popup">
            <div className="markets-popup__selects">
                <div className="markets-popup__select">
                    <span className="markets-popup__block-headers">Шаблон</span>
                    <BaseSelect options={sampleOptions}/>
                </div>
                <div className="markets-popup__select">
                    <span className="markets-popup__block-headers">Цветовая схема</span>
                    <BaseSelect options={colorSchemeOptions}/>
                </div>
            </div>
            <div className="markets-popup__domen">
                <span className="markets-popup__block-headers">Домен</span>
                <div className="markets-popup__domen__input">
                    <input
                        className="gray-input"
                        placeholder="Например: ivangrozniy"
                    />
                    <span className="purple-input">.work5.ru</span>
                </div>
            </div>
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
                <div  className="markets-popup__btn">
                    <BaseButton btn={createBtn} text="Создать"/>
                </div>
            </div>
        </div>
    );
}

export default MarketsPopup;

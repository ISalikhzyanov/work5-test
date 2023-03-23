import React, {useState} from 'react';
import arrow from '../../assets/img/arrow-down.svg'
import '../../assets/styles/components/base-select.scss'

function BaseSelect({options}: any) {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="base-select">
            <input
                className="base-select__input"
                type="text"
                onClick={() => setDropdown(!dropdown)}
                placeholder={options[0].value}
            />
            <img
                src={arrow}
                className="base-select__dropdown-btn"
                onClick={() => setDropdown(!dropdown)}
            />
            { dropdown && <ul className="base-select__dropdown">
                {options?.map((option: any) =>
                    <li
                        className="base-select__dropdown-item"
                        key={option.id}>{option.value}</li>
                )}
            </ul> }
        </div>
    );
}

export default BaseSelect;

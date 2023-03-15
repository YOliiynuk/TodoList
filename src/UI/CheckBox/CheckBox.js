import React from 'react';
import './checkBox.css';
import {RiCheckboxCircleFill, RiCheckboxCircleLine} from 'react-icons/ri'

const CheckBox = ({onClick, complete}) => {
    return (
        <div className='checkBox' onClick={onClick}>
            {
                complete ?
                    <RiCheckboxCircleLine size={22} className='icon' /> :
                    <RiCheckboxCircleFill size={22} className='icon' />
            }

        </div>
    )
}

export default CheckBox;

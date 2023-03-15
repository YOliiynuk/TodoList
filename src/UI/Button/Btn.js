import React from 'react';
import './btn.css'
import plus from './../../assets/plus.svg'
import {HiOutlineTrash} from 'react-icons/hi';


const Btn = ({children, deleteType, onClick}) => {
    if (deleteType){
        return (
            <HiOutlineTrash
            size={20}
            onClick={onClick}
            className='deleteBtn'
            />
        );

    }else {
        return (
            <button className="btn">
                {children} <img src={plus} alt="icon_plus"/>
            </button>
        );
    }

};

export default Btn;
        
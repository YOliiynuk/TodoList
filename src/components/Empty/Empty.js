import React from 'react';
import './Empty.css';
import empty from './../../assets/empty.svg'
const Empty = () => {
    return (
        <div className={'empty'}>
            <img src={empty} alt="empty"/>
            <div className={'text'}>
                <span className={'bold'}>
                    У вас немає завдань
                </span>
                    Створюйте та успішно виконуйте свої справи
            </div>
        </div>
    );
};

export default Empty;
        
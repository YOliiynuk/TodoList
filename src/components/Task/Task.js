import React, {useState} from 'react';
import './task.css';
import CheckBox from "../../UI/CheckBox/CheckBox";
import Btn from "../../UI/Button/Btn";

const Task = ({task, removeTask, handleComplete }) => {
    const [complete, setComplete] = useState(true)
    const handleClick = () => {
        setComplete(!complete);
        const check = (task.completed) = complete
        handleComplete(check)
    }

    return (
        <div key={task.id} className="task">
        <CheckBox complete={complete} onClick={handleClick}/>
            <p className={complete ? "text" : "text_comp"}>{task.text}</p>
            <Btn deleteType onClick={()=>removeTask(task)}/>
        </div>
    );
};

export default Task;
        
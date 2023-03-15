import React, {useState} from 'react';
import './page.css'
import Input from "../../UI/Input/Input";
import Btn from "../../UI/Button/Btn";
import Task from "../Task/Task";
import Empty from "../Empty/Empty";

const Page = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, {id: Date.now(), text: input, completed: false}])
            setInput('')
        }
    }
    const removeTask = (todoId) => {
        setTodos(todos.filter(id => id !== todoId))
    }
    const handleComplete = (todo_comp) => {
        setTodos(todos.filter(completed => completed !== todo_comp))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} value={input} text={"text"} placeholder={'Введіть ваше завдання...'} />
                <Btn>Добавити</Btn>
            </form>

            <div className="tasks">
                <div className="bottom_text">
                    <p>Всіх завданнь: <span className='num'>{todos.length}</span></p>
                    <p>Виконано: <span className='num'>{todos.filter(item => item.completed).length} з {todos.length}</span></p>
                </div>
                {
                    todos.map(item => (
                        <Task
                        todos={todos}
                        key={item.id}
                        handleComplete={handleComplete}
                        task={item}
                        removeTask={removeTask}
                        />
                    ))
                }
                {
                    !!todos.length || <Empty/>
                }
            </div>
        </div>
    );
};

export default Page;
        
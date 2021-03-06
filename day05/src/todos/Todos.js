import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../utils/css/reset.css'
import './Todos.css'

const Todos = () => {
    const no = useRef(3)
    const [todos, setTodos] = useState([
        {id:1, text:'점심먹기', done:false},
        {id:2, text:'운동하기', done:false}
    ])

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {id:no.current++, text, done:false}
        ])
    }

    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // done - true/false
    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, done:!todo.done}:todo))
    }
    /* const onToggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    done:!todo.done
                }
            } else {
                return todo
            }
        }))
    }*/

    return (
        <div className="Todos">
            <h1>Todo List</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;
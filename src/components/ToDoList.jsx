import React, { useState } from 'react'

const ToDoList = () => {
    const [todo, setToDo] = useState([])
    const [newtodo, setNewToDo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newtodo.length == 0){
            return;
        }
        const todoItem = {
            text: newtodo,
            complete: false
        }
        setToDo([...todo, todoItem]);
        setNewToDo("");
    }

    const handleComplete = (idx) => {
        const completeToDo = todo.map((todo, i) => {
            if(idx === i) {
                todo.complete = !todo.complete;
            }
            return todo
        })
        setToDo(completeToDo)
    }

    const handleDelete = (bad) => {
        const filterToDo = todo.filter((todo, i) => {
            return i !== bad;
        });
        setToDo(filterToDo)
    }


        return (
        <div>ToDoList
            <form action="submit" onSubmit={(e) => {handleSubmit(e)}}>
                <label for="NewToDo">New To-Do:</label>
                <input type="text" name="NewToDo" value={newtodo} onChange={e => setNewToDo(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            {
                todo.map((todo, i) => {
                    return(
                        <div key={i}>
                            <input type="checkbox" name="complete" checked={todo.complete} onChange={e => handleComplete(i)} />
                            <span style={{textDecoration:todo.complete ? 'line-through':'none'}}>{todo.text}</span>
                            <button class="delete" onClick={(e) => {handleDelete(i)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        )
}

export default ToDoList
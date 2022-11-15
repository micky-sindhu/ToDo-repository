import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo,deleteToDo, editToDo } from './redux/action';
import './mainComponent.css'

function MainComponent() {
    const [task, setTask] = useState('')
    const [editable,setEditable] = useState(false)
    const [editVal,setEditVal] = useState('')
    const [editObjVal,setEditObjVal] = useState({})
    const listValue = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const addTodoFunc = () => {
        dispatch(createTodo({ id: Math.random(), task: task, status: 'Created' }))
        setTask('')
    }
    const delFunc = (item) => {
        dispatch(deleteToDo(item))
    }
    const editFunc = (item) => {
        setEditObjVal(item)
        setEditable(true)
        setEditVal(item.status)
        dispatch(editToDo(item))
    }
    const updateFunction = () => {
        let obj = {}
    }
    return (
        <div>
            {editable?<div>
                <input value={editVal} onChange={(e) => setEditVal(e)}/>
                <button onClick={updateFunction}>Update</button> 
            </div>: 
            <div className='inputContainer'>
                <input className='inputComponent' value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTodoFunc} className='btnClass' >Add ToDo</button>
            </div>}
           
            <div className='listContainer'>
                {listValue.map((item)=>{
                    return(
                        <div className='list' key={item.id}>
                           <div className='TextComponent'>
                           <span>{item.task}</span>
                            <span>{item.status}</span>
                            </div>
                            <button className='editBtn' onClick={() => editFunc(item) }>Edit</button>
                            <button className='delBtn' onClick={() => delFunc(item)} >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainComponent;
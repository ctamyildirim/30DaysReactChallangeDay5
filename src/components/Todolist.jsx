import React, {useContext} from 'react'
import { MainContext } from '../context/context'
import {RiCloseFill, RiPencilFill ,RiCheckFill} from 'react-icons/ri'
import clsx from 'clsx'
import './todolist.css'


function Todolist() {

  const [{todos}, dispatch] = useContext ( MainContext)

  const removeTodo= (id) => {
    dispatch({
      type : 'REMOVE_TODO',
      payload : id
    })
  }

  const completed = (id) =>{
    dispatch({
      type : 'COMPLETE_TODO',
      payload : id
    })
  }
  const setEditable = (id) =>{
    dispatch({
      type : 'EDIT_TODO',
      payload : id
    })
  }

    const updateTodo = (e, id) => {
      dispatch({
        type : 'UPDATE_TODO',
        payload : {
          id : id,
          content : e.target.value
        }
      })
    }
  



  return (
    <div className='w-1/5 mx-auto mt-5 bg-slate-800 p-2 rounded-xl shadow-lg shadow-black' style={{'minHeight' : '500px'}}>
      <ul className='list-none'>
        {
          todos.map((todo , idx) =>  {
            const completeStyle= clsx({
              ['completed'] : todo.completed
            })
            return(
              <li key='idx' className={completeStyle} >
                <div className="todo-row flex justify-between text-gray-100 p-2 bg-indigo-500 rounded-xl my-2">
                  <div className="content inline ">
                    {
                      todo.editable ? 
                      <input className='bg-transparent border-2 border-slate-200 outline-0 p-1 px-2 rounded' value={todo.content} onChange={e => updateTodo(e, todo.id)}></input> :
                      <p className='cursor-pointer' onClick={e=> completed(todo.id)}>{todo.content}</p>
                    }
                  </div>
                  <div className="buttons inline">
                  {
                      todo.editable ? 
                      <RiCheckFill className='inline mr-2 text-lg cursor-pointer' onClick={e=> setEditable(todo.id)}/> :
                      <RiPencilFill className='inline mr-2 text-lg cursor-pointer' onClick={e=> setEditable(todo.id)}/>
                    }
                    <RiCloseFill className='inline text-lg cursor-pointer' onClick={e => removeTodo(todo.id)}/>
                  </div>
                </div>
              </li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
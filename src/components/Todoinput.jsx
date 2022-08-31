import React, { useContext } from 'react'
import { MainContext } from '../context/context'


function Todoinput() {

  const [{todo, todos}, dispatch] = useContext ( MainContext)

  const randomID = () =>{
    const x = Math.floor(Math.random() * 5236);
    return x;
  }

  const setTodo = (e) => {
    dispatch({
      type: 'SET_TODO',
      payload : {
        id : randomID(),
        content : e.target.value
      }
    })

  }
  const addTodo = () => {
    if(todo !== ''){
      dispatch({
        type : 'ADD_TODO',
        payload : todo
      })
    }
  }

  return (
    <form className='w-1/5 mx-auto mt-10 px-4 flex justify-center' onSubmit={e=> e.preventDefault()}>
      <input className='border-2 border-zinc-600 rounded p-1 px-2 mr-3 focus:shadow-violet-800 focus:shadow-md' value={todo.content} type='text' onChange={setTodo}></input>
      <button className='bg-violet-400 hover:bg-gray-300 text-slate-100 hover:text-violet-800 rounded-xl py-2 px-4' onClick={addTodo}>ADD TODO</button>
    </form>
  )
}

export default Todoinput
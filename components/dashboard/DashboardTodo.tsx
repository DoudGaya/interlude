import { useContext, useState} from 'react'
import { useTodoContext } from '@/utils/context/TodoContext'
import { SingleTodo } from './SingleTodo'


function DashboardTodo() {


  const {todos, createTodo, deleteTodo} = useTodoContext()
  const [todo, setTodo] = useState('')

  
  const addTodo = ( event: any) => {
    event.preventDefault()
    createTodo(todo)
    setTodo('')
  }

  const getTodoText = (event: any) => {
    const {value} = event.target
    setTodo(value)
  }


  return (
    <div className=' flex flex-col w-full space-y-6'>
      <form onSubmit={addTodo} className=' w-2/3 flex space-x-4  bg-white dark:bg-black py-2 px-4 '>
        <input required onChange={getTodoText} value={todo} type="text" className=' border dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-200 dark:bg-gray-800 focus:outline-none  w-full ' />
        <button className=' bg-primary px-3 flex-none py-2 rounded-lg text-white'>Create Task</button>
      </form>
      <hr className=' border-gray-400' />
     <div className="grid gap-6 grid-cols-4 w-full">
        
        {
        // @ts-ignore
        todos.map((todo: Todo) => {

          console.log(todo.time)
          return (
            <div className=" w-full py-4 px-3 justify-between  flex border drop-shadow-sm border-gray-300 dark:border-gray-700 dark:text-gray-400 rounded-lg flex-col space-y-6">
              <div className="">
              <small>{ todo.time.toLocaleDateString() }</small>
                <p className="text-sm">{todo.text}</p>
              </div>
                {
                !todo.completed &&
               <button onClick={() => deleteTodo(todo.id)} className=" flex justify-between dark:bg-gray-800 dark:text-gray-300 bg-gray-200 items-center py-2 rounded-lg px-3">
                <p className=' text-xs text-gray-600 dark:text-gray-300'>Completed? </p>
                 <span >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
               </button>
              }
        </div>
          )
        })
        }
     </div>
    </div>
  )
}

export default DashboardTodo
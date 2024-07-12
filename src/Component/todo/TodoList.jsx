import React, { useEffect, useState } from 'react'
import { deleteTodoApi, retrieveAllTodos } from './api/TodoApi';
import { useAuth } from './security/AuthContext';

const TodoList = () => {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    );

    const authContext = useAuth()
   const username = authContext.username
   console.log(username,">>>>>>>>>")
    const [todos,setTodos] = useState([]);

    useEffect(()=>refreshTodos,[])

    function refreshTodos(){
    retrieveAllTodos(username).then(response=>{
      setTodos(response.data)
    }).catch(error=>console.log(error))
    }
    // const todos = [
      // {
      //   id: 1,
      //   description: "Learn React",
      //   done: false,
      //   targetDate: targetDate,
      // },
      // {
      //   id: 2,
      //   description: "Learn java",
      //   done: false,
      //   targetDate: targetDate,
      // },
      // {
      //   id: 1,
      //   description: "Learn aws",
      //   done: false,
      //   targetDate: targetDate,
      // },
      // {
      //   id: 1,
      //   description: "Learn javascript",
      //   done: false,
      //   targetDate: targetDate,
      // },
    // ];
    const [message,setMessage]=useState(null)
    
    function deleteTodo(id){
     deleteTodoApi(username,id).then(()=>{
     setMessage(`Delete of todo with id = ${id} successful`)
      refreshTodos();
     }).catch(error=>console.log(error))
    }

    function updateTodo(id){ 

    }
    return (
      <div className="container">
        <h1>Things you want to do !</h1>
        {message && <div className='alert alert-warning'>{message}</div>}
        <div >
          <table className="table">
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>IS DONE</th>
                <th>TARGET DATE</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td><button className='btn btn-warning'onClick={()=>deleteTodo(todo.id)} >Delete</button></td>
                  <td><button className='btn btn-success' onClick={()=>updateTodo(todo.id)} >Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default TodoList
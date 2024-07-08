import React from 'react'

const TodoList = () => {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    );
    const todos = [
      {
        id: 1,
        description: "Learn React",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 2,
        description: "Learn java",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 1,
        description: "Learn aws",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 1,
        description: "Learn javascript",
        done: false,
        targetDate: targetDate,
      },
    ];
    return (
      <div className="container">
        <h1>Things you want to do !</h1>
        <div >
          <table className="table">
            <thead>
              <tr>
                <td>ID</td>
                <td>DESCRIPTION</td>
                <td>IS DONE</td>
                <td>TARGET DATE</td>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default TodoList
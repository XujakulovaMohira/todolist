import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function TodoData() {
  const [todo, setTodo] = useState([]);
  console.log(todo);

  const param = useParams();
  console.log(param);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        const filterTodo = todos.filter((user) => {
          return user.userId == param.id;
        });
        setTodo(filterTodo);
      });
  },[]);


  return (
    <div className="table-card">
      <h1>Detail page param: {param?.id}</h1>
      <NavLink to="/">Home go</NavLink>
      <table cellPadding={10} cellSpacing={0} border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Userid</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todo.length &&
            todo.map((todoss, index) => (
              <tr key={index}>
                <td>{todoss.userId}</td>
                <td>{todoss.id}</td>
                <td>{todoss.title}</td>
                <td>{todoss.completed == true ? "✅" : "❌"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoData;

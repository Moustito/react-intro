// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

function App() {
  // state (état, données)
  const [todos, setTodos] = useState([
    { id: 1, nom: "Learn React" },
    { id: 2, nom: "Be Awsome !" },
  ]);

  // Comportements
  const handleRemove = (id) => {
    // console.log(id);
    // Rajouter un valeur au state todo. Jamais modifier un state directement!
    //1. copie du state
    const todosCopy = [...todos];

    //2. manipulation sur la copie du state
    const todosCopyUpdated = todosCopy.filter((todo) => todo.id !== id);

    //3. modifier le state avec le setter
    setTodos(todosCopyUpdated);
  };

  const handleAdd = (TodoAAjouter) => {
    // Rajouter un valeur au state todo. Jamais modifier un state directement!
    // En liens avec TodoForm.jsx, toujours modifier un state dans le fichiers où il est défini.
    //1. copie du state
    const todosCopy = [...todos];

    //2. manipulation sur la copie du state
    todosCopy.push(TodoAAjouter);

    //3. modifier le state avec le setter
    setTodos(todosCopy);
  };

  // Affichage (render)
  return (
    <div className="App">
      <h1 className="App__title">My Todo App</h1>
      <TodoForm handleAdd={handleAdd} />

      <h3 className="TodoList__title">Todos</h3>
      <ul className="TodoList">
        {" "}
        {todos.map((todoList) => (
          <Todo todoInfo={todoList} onTodoRemove={handleRemove} key={todoList.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;

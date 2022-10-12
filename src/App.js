// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // state (état, données)
  const [todos, setTodos] = useState([
    { id: 1, nom: "Learn React" },
    { id: 2, nom: "Be Awsome !" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la page de se rafraîchir en entier.
    // Rajouter un valeur au state todo. Jamais modifier un state directement!
    //1. copie du state
      const todosCopy = [...todos];

    //2. manipulation suyr la copie du state
      const id = new Date().getTime();
      const nom = newTodo;
      todosCopy.push({id , nom});

    //3. modifier le state avec le setter
      setTodos(todosCopy);
      setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const checked = (event) => {
    console.log(event.target.checked);
  };

  const handleRemove = (id) => {
    console.log(id);
    // Rajouter un valeur au state todo. Jamais modifier un state directement!
    //1. copie du state
    const todosCopy = [...todos];
      
    //2. manipulation suyr la copie du state
    const todosCopyUpdated = todosCopy.filter((todo) => todo.id !== id); 

    //3. modifier le state avec le setter
    setTodos(todosCopyUpdated);
  };

  // Affichage (render)
  return (
    <div className="App">
      <h1 className="App__title">My Todo App</h1>
      <form className="Form" action="submit" onSubmit={handleSubmit}>
        <input
          className="Form__input"
          value={newTodo}
          type="text"
          placeholder="Type a new todo"
          onChange={handleChange}
        />
        <button className="Form__button">Add Todo</button>
      </form>
      <h3 className="TodoList__title">Todos</h3>
      <ul className="TodoList">
        {todos.map((todoList) => (
          <li key={todoList.id}>
            <input type="checkbox" onChange={checked}/>
            {todoList.nom}
            <button onClick={() => handleRemove(todoList.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

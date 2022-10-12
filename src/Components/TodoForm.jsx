import { useState } from "react";

export default function TodoForm({handleAdd}) {
    // state
    const [newTodo, setNewTodo] = useState("");

    // comportements
    const handleSubmit = (event) => {
      event.preventDefault(); // Empêche la page de se rafraîchir en entier.
      // Rajouter un valeur au state todo. Jamais modifier un state directement!
      //1. copie du state
  
      //2. manipulation sur la copie du state
        const id = new Date().getTime();
        const nom = newTodo;
        const TodoAAjouter = {id, nom};
        handleAdd(TodoAAjouter);
  
      //3. modifier le state avec le setter
        setNewTodo("");
    };
  
    const handleChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    // affichage (render)
    return (
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
    );
  }
  
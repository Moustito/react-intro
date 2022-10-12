export default function Todo({todoInfo, onTodoRemove}) {
  // state

  // comportements
  const checked = (event) => {
    // console.log(event.target.checked);
  };

  // affichage (render)
  return (
      <li>
        <input type="checkbox" onChange={checked} />
        {todoInfo.nom}
        <button onClick={() => onTodoRemove(todoInfo.id)}>X</button>
      </li>
  );
}

export default function Footer({todos, active}) {
  // state

  // comportements
  console.log(active);
  console.log(active.checked);

  // affichage (render)
  return (
    <div>
        <p>{todos.length} items left</p>
        <nav>
            <button value="">All</button>
            <button value="false" onClick={active}>Active</button>
            <button value="true">Completed</button>
        </nav>
    </div>
  );
}

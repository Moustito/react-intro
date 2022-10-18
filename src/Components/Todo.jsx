import deleteIcon from '../assets/delete.svg'

export default function Todo({todoInfo, onTodoRemove, setActive, active }) {
  // state

  // comportements

  // affichage (render)
  return (
      <li>
        <input value={active} type="checkbox" onChange={(event) => setActive(event)} />
        {todoInfo.nom}
        <img className='deleteIcon' onClick={() => onTodoRemove(todoInfo.id)} src={deleteIcon} alt="Delete-Icon"/>
      </li>
  );
}

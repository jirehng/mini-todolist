import React from 'react';

export default function List(props) {
  return(
    <ul className="list">
    {props.list.map((item) => (
      <li>
        <p onClick={() => props.handleCheck(item.id)} className={item.checked && "checked"}>{item.title}</p>
        <img src="/Images/delete.png" className="delete" onClick={() => props.handleDelete(item.id)}/>
      </li>
    ))}
  </ul>
  )
}
import React from 'react';

const Todo = (props)=>{
    return(
        <li>
            <div>{props.text}</div>
            <input onClick={props.onChecked} type="checkbox" defaultValue={false}/>
            <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}
 
export default Todo;
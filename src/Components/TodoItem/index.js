import React from "react";
import './TodoItem.css';
import { FiCheckSquare, FiSquare ,FiXSquare } from "react-icons/fi";


function TodoItem(props){
    return(
        <li className="TodoItem">
            <div className={props.completed && 'Icon-check--active'} onClick={props.onCompleted}>
                 {props.completed ? <FiCheckSquare/> : <FiSquare/> }
            </div>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
           
            <div className={props.completed && 'Icon-delete'} onClick={props.onDelete}>
                 <FiXSquare/> 
            </div>
        </li>
    );
}

export { TodoItem };

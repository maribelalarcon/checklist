import React from 'react';
import { TodoContext } from '../../App/TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setTodoValue] = React.useState('');

    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setTodoValue(event.target.value) 
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };

    return(
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label"> Escribir tu nuevo TODO </label>
            <textarea 
                value= {newTodoValue}
                onChange={onChange}
                placeholder= "TODOS"
            />

            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
            
                <button type="submit" className="Todoform-button TodoForm-button--add">
                    Añadir
                </button>
            </div>

        </form>
    );
}
export { TodoForm };
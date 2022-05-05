import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from '../Components/TodoCounter';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSerch';
import { TodoItem } from '../Components/TodoItem';
import { CreatTodoButton } from '../Components/CreatTodoButton';
import { Modal } from './Modal';
import { TodoForm } from '../Components/TodoForm';
import { TodosError } from '../Components/TodosError'; 
import { TodosLoading } from '../Components/TodosLoading';
import { EmpatyTodos } from '../Components/EmptyTodos'; 

function AppUI() {
  const {error, loading, searchTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
              {error && <TodosError error={error} /> }
              {loading && <TodosLoading />}
              {(!loading && !searchTodos.length) && <EmpatyTodos />}

              {searchTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                /> 
              ))}
      
            </TodoList>

            {!!openModal && (
              <Modal> 
               <TodoForm />

              </Modal>
            )}
            
            <CreatTodoButton
              setOpenModal={setOpenModal}
            />
        
      </React.Fragment>
    );
}

export { AppUI };
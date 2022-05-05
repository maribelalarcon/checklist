import React from "react";
import { TodoContext } from "../../App/TodoContext";
import "./TodoSerch.css";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSerchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            className="TodoSerch" 
            placeholder= "Cebolla"
            value={searchValue}
            onChange={onSerchValueChange}
        />
    );
}

export {TodoSearch};
import React from "react";
import './CreatTodoButton.css';

function CreatTodoButton(props) {
    const onClickButton = () => {
       props.setOpenModal(prevState => !prevState);
    };

    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >
         +
        </button>
    );
}

export { CreatTodoButton};
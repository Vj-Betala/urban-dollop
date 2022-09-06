import React, { useState, useEffect, useRef} from "react"

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : input
        });
        
        setInput('');
    }

  return (
    <div className="form-holder">
        <form className="todo-form" onSubmit={handleSubmit} >
            {
            props.edit ?
            (<> 
            <input placeholder="Edit" type="text" value={input} name="text" ref={inputRef} className="todo-input edit" onChange={handleChange}></input>
            <button onClick={handleSubmit} className="todo-button edit">Update</button>
            </>)
            :
            (<>
            <input placeholder="Action" type="text" value={input} name="text" ref={inputRef} className="todo-input" onChange={handleChange}></input>
            <button onClick={handleSubmit} className="todo-button">Add Todo</button>
            </>)
            }

        </form>
    </div>
  );
}

export default TodoForm
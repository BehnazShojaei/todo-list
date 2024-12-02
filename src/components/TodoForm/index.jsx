import { useState } from 'react';

function TodoForm(props) {
  const [value, setValue] = useState(""); //state variable value, update function setValue, initialize it with empty string


  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the form from reloading the page
    if (!value) {
      return; //if value is falsy stop further execution of the function
    }
    props.addTodo(value); //call the addTodo function from the props with value
    setValue(""); // reset the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value} //bind the input to the value state
        type="text"
        placeholder="Add Todo..."s
        onChange={(event) => setValue(event.target.value)}
      // on change event fires when user types in input field.
      // it calls the inline arrow function. 
      // event input event object
      // event.target.value get the current value of the input field
      // setValue() updates the value state with the new input
      />
    </form>
  );
}

export default TodoForm;
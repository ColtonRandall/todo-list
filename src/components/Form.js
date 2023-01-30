import React from "react";

const Form = ({ inputText, setInputText, todos, setTodo }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const IdGeneratorHandler = () => {
    let num = Math.random() * 10000;
    let roundedNum = Math.trunc(num); // remove decimal places
    return roundedNum;
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: IdGeneratorHandler(),
      },
    ]); // spread any previous todos, and add a new one with text, completed, and ID
    setInputText(""); // set the input to empty once submitted
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

import { useRef, useState } from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import classes from './NewTodoForm.module.css';

function NewTodoForm(props) {

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const typeInputRef = useRef();
  const durationInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const exerciseData = {
      name: enteredName,
      description: enteredDescription,
      activityType: enteredType,
      duration: enteredDuration,
      date: enteredDate,
    };

    props.onAddTodo(exerciseData);
  }



  return (
    <Card>
      
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Register Your Activity</h1>
        <div className={classes.control}>
        <br />
          <label htmlFor='title' >Name:</label>
          <input type='text' required id='title' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
        
        <label htmlFor='title'>Activity Type:</label>
        <select required ref={typeInputRef}>
          <option value="">Please choose an option</option>
          <option value="Running">Running</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walking">Walking</option>
          <option value="Swimming">Swimming</option>
          <option value="Hiking">Hiking</option>
        </select>
        </div>
      <div className={classes.control}>
        
      <label required htmlFor='title'>Enter Duration in Minutes:</label>      
      <input type='number' required ref={durationInputRef} />
        </div>
        <div className={classes.control}>
          <label required htmlFor='description'>Description:</label>
          <textarea
            id='description'
            required
            rows='3'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
        
      <label required htmlFor='title'>Date:</label>
          <input type="date" ref={dateInputRef}/>
        </div>
        <div className={classes.actions} >
          <button onClick={submitHandler}>.<Link href='/activity'>Register</Link> </button>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;

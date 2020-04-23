import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import moment from 'moment';

const dateFormat = "L LT";
const isItBeforeNow = (date) => {
  return (moment(date)<moment(new Date()));
};

const TodoDiv = styled.div`
  margin: 2vh 2vw;

  label {
    display: inline-block;
    width: 50vw;
    font-size: 2.4rem;
    margin-left: 2vw;
  }

  .strikeThru {
    text-decoration: line-through;
    color: grey;
  }

  span {
    margin: 0 20px;
  }

  .overdue {
    color: red;
  }
`;

function Todo(props) {
  const [dueDate, setDueDate] = useState(props.task.dueDate||undefined);

  useEffect(()=>{
    props.dispatch({type: 'SET_DUE_DATE', payload: {taskId: props.task.id, dueDate: dueDate}});
  },[dueDate])

  return (
    <TodoDiv>
      {props.task.completed?<input name={props.task.id} type="checkbox" checked onChange={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:false}})} />:<input name={props.task.id} type="checkbox" onChange={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:true}})} />}
      {props.task.completed?<label htmlFor={props.task.id} className="strikeThru" onClick={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:false}})} >{props.task.item}</label>:<label htmlFor={props.task.id} onClick={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:true}})} >{props.task.item}</label>}
      {props.task.completed&&props.task.compDate?<span data-testid="completedSpan">Completed: <Moment data-testid="moment" format={dateFormat}>{props.task.compDate}</Moment></span>:isItBeforeNow(props.task.dueDate)?<span data-testid="dueDateSpan" className="overdue">Overdue! <input data-testid="dueDateInput" type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} onSubmit={e=>setDueDate(e.target.value)} /></span>:<span data-testid="dueDateSpan">Due date: <input data-testid="dueDateInput" type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} onSubmit={e=>setDueDate(e.target.value)} /></span>}
    </TodoDiv>
  );
}

export default Todo;

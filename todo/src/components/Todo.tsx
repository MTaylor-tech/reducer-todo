import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const dateFormat: string = "L LT";
const isItBeforeNow = (date: string): boolean => {
  return (moment(date)<moment(new Date()));
};

function Todo(props: any): JSX.Element {
  const [dueDate, setDueDate] = useState<string>(props.task.dueDate||undefined);

  useEffect(()=>{
    props.dispatch({type: 'SET_DUE_DATE', payload: {taskId: props.task.id, dueDate: dueDate}});
  },[dueDate])

  return (
    <div className="todo-div">
      {props.task.completed?<input name={props.task.id} type="checkbox" checked onChange={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:false}})} />:<input name={props.task.id} type="checkbox" onChange={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:true}})} />}
      {props.task.completed?<label htmlFor={props.task.id} className="todo-label strikeThru" onClick={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:false}})} >{props.task.item}</label>:<label className="todo-label" htmlFor={props.task.id} onClick={()=>props.dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: props.task.id, completed:true}})} >{props.task.item}</label>}
      {props.task.completed&&props.task.compDate?<span className="todo-span" data-testid="completedSpan">Completed: <Moment data-testid="moment" format={dateFormat}>{props.task.compDate}</Moment></span>:isItBeforeNow(props.task.dueDate)?<span data-testid="dueDateSpan" className="todo-span overdue">Overdue! <input data-testid="dueDateInput" type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} onSubmit={e=>setDueDate(e.target.value)} /></span>:<span className="todo-span" data-testid="dueDateSpan">Due date: <input data-testid="dueDateInput" type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} onSubmit={e=>setDueDate(e.target.value)} /></span>}
    </div>
  );
}

export default Todo;

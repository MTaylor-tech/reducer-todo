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
  const [dueDate, setDueDate] = useState(props.task.dueDate||null);
  const [isOverdue, setIsOverdue] = useState();

  const changeDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const saveDueDate = (event) => {
    event.preventDefault();
    setDueDate(event.target.value);
  };

  useEffect(()=>{
    props.saveDueDate(props.task.id, dueDate);
  },[dueDate])

  return (
    <TodoDiv>
      {props.task.completed?<input name={props.task.id} type="checkbox" checked onChange={()=>props.markComplete(props.task.id,false)} />:<input name={props.task.id} type="checkbox" onChange={()=>props.markComplete(props.task.id,true)} />}
      {props.task.completed?<label htmlFor={props.task.id} className="strikeThru" onClick={()=>props.markComplete(props.task.id,false)} >{props.task.item}</label>:<label htmlFor={props.task.id} onClick={()=>props.markComplete(props.task.id,true)} >{props.task.item}</label>}
      {props.task.completed&&props.task.compDate?<span>Completed: <Moment format={dateFormat}>{props.task.compDate}</Moment></span>:isItBeforeNow(props.task.dueDate)?<span className="overdue">Overdue! <input type="date" value={dueDate} onChange={saveDueDate} onSubmit={saveDueDate} /></span>:<span>Due date: <input type="date" value={dueDate} onChange={saveDueDate} onSubmit={saveDueDate} /></span>}
    </TodoDiv>
  );
}

export default Todo;

import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

const dateFormat = "L LT";
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
`;

function Todo(props) {
  return (
    <TodoDiv>
      {props.task.completed?<input name={props.task.id} type="checkbox" checked onChange={()=>props.markComplete(props.task.id,false)} />:<input name={props.task.id} type="checkbox" onChange={()=>props.markComplete(props.task.id,true)} />}
      {props.task.completed?<label htmlFor={props.task.id} className="strikeThru" onClick={()=>props.markComplete(props.task.id,false)} >{props.task.item}</label>:<label htmlFor={props.task.id} onClick={()=>props.markComplete(props.task.id,true)} >{props.task.item}</label>}
      {props.task.completed&&props.task.compDate?<span>Completed: <Moment format={dateFormat}>{props.task.compDate}</Moment></span>:<></>}
    </TodoDiv>
  );
}

export default Todo;

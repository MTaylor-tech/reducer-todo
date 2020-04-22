import React from 'react';
import styled from 'styled-components';

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
      {props.task.completed?<input name={props.task.id} type="checkbox" defaultChecked onChange={null} />:<input name={props.task.id} type="checkbox" onChange={null} />}
      {props.task.completed?<label htmlFor={props.task.id} className="strikeThru" onClick={null} >{props.task.item}</label>:<label htmlFor={props.task.id} onClick={null} >{props.task.item}</label>}
    </TodoDiv>
  );
}

export default Todo;

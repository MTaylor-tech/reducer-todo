import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    .button {
      border-radius:3px;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:1.5rem;
      padding:9px 23px;
      text-decoration:none;

      &:active {
      	position:relative;
      	top:1px;
      }
    }

    .blueButton {
      box-shadow:inset 0px -3px 7px 0px #29bbff;
      background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
      background-color:#2dabf9;
      border:1px solid #0b0e07;
      text-shadow:0px 1px 0px #263666;

      &:hover {
        background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
        background-color:#0688fa;
      }
    }

    .redButton {
    	box-shadow:inset 0px -3px 7px 0px #781f1f;
    	background:linear-gradient(to bottom, #f72e2e 5%, #4d0808 100%);
    	background-color:#f72e2e;
    	border:1px solid #0d060a;
    	text-shadow:0px 1px 0px #662727;
      margin-top: 2vh;

      &:hover {
      	background:linear-gradient(to bottom, #4d0808 5%, #f72e2e 100%);
      	background-color:#4d0808;
      }
    }

    input {
      height: 2.4rem;
      font-size: 2rem;
      margin-right: 2vw;
    }
`;

function TodoForm(props) {

  return (
    <FormDiv>
      <form onSubmit={null}>
        <input onChange={null} placeholder={null} />
        <button className="button blueButton" type="submit">Add Task</button>
      </form>
      <form>
        <input onChange={null} placeholder={null} />
      </form>
      <button className="button redButton" onClick={null}>Clear Completed</button>
    </FormDiv>
  );
}

export default TodoForm;

import React, {useState} from 'react';
import styled from 'styled-components';

const TodoHeaderDiv = styled.div`
  margin: 2vh 2vw;

  h2 {
    display: inline-block;
    width: 50vw;
    font-size: 2.6rem;
    margin-left: 4vw;
  }

  h3 {
    display: inline-block;
    font-size: 2.6rem;
    margin: 0 20px;
  }
`;

function TodoHeader(props) {
  const [reverse, setReverse] = useState({status: false, text: false, due: false});

  const sortBy = (type) => {
    switch (type){
      case 'STATUS':
        props.dispatch({type: 'SORT_BY_STATUS', payload: {reverse: reverse.status}});
        setReverse({...reverse, status: !reverse.status});
        break;
      case 'TEXT':
        props.dispatch({type: 'SORT_BY_TEXT', payload: {reverse: reverse.text}});
        setReverse({...reverse, text: !reverse.text});
        break;
      case 'DUE':
        props.dispatch({type: 'SORT_BY_DUE', payload: {reverse: reverse.due}});
        setReverse({...reverse, due: !reverse.due});
        break;
      default:
        break;
    }
  };

  return (
    <TodoHeaderDiv>
      <button onClick={()=>sortBy('STATUS')}>^</button>
      <h2 onClick={()=>sortBy('TEXT')}>Task</h2>
      <h3 onClick={()=>sortBy('DUE')}>Due Date</h3>
    </TodoHeaderDiv>
  );
}

export default TodoHeader;

import React, {useState} from 'react';

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
    <div className="todoHeader-div">
      <button onClick={()=>sortBy('STATUS')}>^</button>
      <h2 className="todoHeader-h2" onClick={()=>sortBy('TEXT')}>Task</h2>
      <h3 className="todoHeader-h3" onClick={()=>sortBy('DUE')}>Due Date</h3>
    </div>
  );
}

export default TodoHeader;

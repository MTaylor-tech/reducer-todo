import React from 'react';
import Todo from './Todo';

function TodoList (props) {
  return(
    <div>
      {props.state.visible.map(t=><Todo {...props} task={t} key={t.id} />)}
    </div>
  );
}

export default TodoList;

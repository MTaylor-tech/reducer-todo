import React from 'react';
import Todo from './Todo';

function TodoList (props) {
  return(
    <div>
      {props.list.map(t=><Todo task={t} key={t.id} />)}
    </div>
  );
}

export default TodoList;

import React from 'react';
import Todo from './Todo';

function TodoList (props) {
  return(
    <div>
      {props.list.map(t=><Todo task={t} key={t.id} markComplete={props.markComplete} />)}
    </div>
  );
}

export default TodoList;

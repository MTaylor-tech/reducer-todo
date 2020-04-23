import React from 'react';
import Todo from './Todo';
import TodoHeader from './TodoHeader';

function TodoList (props) {
  return(
    <div>
      <TodoHeader {...props} />
      {props.state.visible.map(t=>
        <Todo {...props} task={t} key={t.id} />
      )}
    </div>
  );
}

export default TodoList;

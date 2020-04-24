import React from 'react';
import Todo from './Todo';
import TodoHeader from './TodoHeader';

function TodoList (props: any): JSX.Element {
  return(
    <div>
      <TodoHeader {...props} />
      {props.state.visible.map((t:any):JSX.Element=>
        <Todo {...props} task={t} key={t.id} />
      )}
    </div>
  );
}

export default TodoList;

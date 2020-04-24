import React, {useState, useEffect} from 'react';

function TodoForm(props: any): JSX.Element {
  const [task, setTask] = useState("Task");
  const [searchFilter, setSearchFilter] = useState("Search");

  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    props.dispatch({type: 'ADD', payload: task});
    event.target.reset();
    setTask('Task');
  };

  useEffect(()=>{
    props.dispatch({type:'SEARCH',payload:searchFilter});
  },[searchFilter]);

  return (
    <div>
      <form onSubmit={submitTask}>
        <input className="todoForm-input" onChange={event=>setTask(event.target.value)} placeholder={task} />
        <button className="button blueButton" type="submit">Add Task</button>
      </form>
      <form onSubmit={e=>e.preventDefault()}>
        <input className="todoForm-input" onChange={event=>setSearchFilter(event.target.value)} placeholder={searchFilter} />
      </form>
      <button className="button redButton" onClick={()=>props.dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;

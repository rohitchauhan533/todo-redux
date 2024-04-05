import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const {todos} = Todo;



  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }


  return (
    <div className="App">
      <header className='App-header'>
        <h2>todo list in redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter  a Todo' onChange={(e)=> setTodo(e.target.value)}/>
          <button type='submit'>Go</button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t) => (

              <li key={t.id} className='singleTodo'>
              <span className='todoText'>{t.todo}</span>
              <button onClick={()=> removeHandler(t)}>Delete</button>
            </li>

            ))
          }

        </ul>
      </header>

    </div>
  );
}

export default App;

import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { increment, decrement, signin } from './actions';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Logged in</h3> : ''}
      <button onClick={() => dispatch(signin())}>{isLogged ? 'Sign Out' : 'Sign In'}</button>
    </div>
  );
}

export default App;

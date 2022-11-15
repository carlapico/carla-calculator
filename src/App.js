// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [total,setTotal] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Carla's Calculator</h1>
        <body className='calculator'>
          <section className='inputBar'>
            <div>{total}</div>
          </section>

          <section className='topRow'>
            <button onClick={()=>{setTotal(total + 7)}}>7</button>
            <button onClick={()=>{setTotal(total + 8)}}>8</button>
            <button onClick={()=>{setTotal(total + 9)}}>9</button>
            <button >/</button>
          </section>
          
          <section className='secondRow'>
            <button onClick={()=>{setTotal(total + 4)}}>4</button>
            <button onClick={()=>{setTotal(total + 5)}}>5</button>
            <button onClick={()=>{setTotal(total + 6)}}>6</button>
            <button>x</button>
          </section>

          <section className='thirdRow'>
            <button onClick={()=>{setTotal(total + 1)}}>1</button>
            <button onClick={()=>{setTotal(total + 2)}}>2</button>
            <button onClick={()=>{setTotal(total + 3)}}>3</button>
            <button>+</button>
          </section>

          <section className='bottomRow'>
            <button onClick={()=>{setTotal(total + 0)}}>0</button>
            <button onClick={()=>{setTotal(0)}}>C</button>
            <button>.</button>
            <button>-</button>
          </section>
        </body>
        <a
          className="App-link"
          href="https://github.com/carlapico/carla-calculator"
          target="_blank"
          rel="noopener noreferrer"
          >
          Github Repository
          </a>
      </header>
    </div>
  );
}

export default App;

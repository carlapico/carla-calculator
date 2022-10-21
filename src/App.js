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
            <input type="button" value="0" />
          </section>

          <section className='topRow'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
          </section>
          
          <section className='secondRow'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>x</button>
          </section>

          <section className='thirdRow'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </section>

          <section className='bottomRow'>
            <button>0</button>
            <button>C</button>
            <button>.</button>
            <button>-</button>
          </section>
        </body>
        <a
          className="App-link"
          href="https://reactjs.org"
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

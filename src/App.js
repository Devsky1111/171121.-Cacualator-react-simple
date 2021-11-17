import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('')
  function handleClick(e) {
    setResult((prevResult) => {
      console.log('prevresult', prevResult)
      return prevResult.concat(e.target.name)
    })
  }
  function clearscreen() {
    setResult('')
  }
  function removeEnd() {
    setResult(result.slice(0, result.length - 1))

  }
  function handleResult() {
    console.log(eval(result))

    setResult(eval(result).toString())
  }
  console.log(result)
  return (
    <div className="app-cacualator">
      <input type="text" value={result} />
      <div className="all-buttons">
        <button onClick={clearscreen} className="btn merge1 active">Clear</button>
        <button onClick={removeEnd} className="btn active">C</button>
        <button onClick={handleClick} className="btn active" name='/'>/</button>
        <button onClick={handleClick} className="btn" name='7'>7</button>
        <button onClick={handleClick} className="btn" name='8'>8</button>
        <button onClick={handleClick} className="btn" name='9'>9</button>
        <button onClick={handleClick} className="btn active" name='*'>*</button>
        <button onClick={handleClick} className="btn" name='4'>4</button>
        <button onClick={handleClick} className="btn" name='5'>5</button>
        <button onClick={handleClick} className="btn" name='6'>6</button>
        <button onClick={handleClick} className="btn active" name='-'>-</button>
        <button onClick={handleClick} className="btn" name='1'>1</button>
        <button onClick={handleClick} className="btn" name='2'>2</button>
        <button onClick={handleClick} className="btn" name='3'>3</button>
        <button onClick={handleClick} className="btn active" name='+'>+</button>
        <button onClick={handleClick} className="btn" name='0'>0</button>
        <button onClick={handleClick} className="btn" name='.'>.</button>
        <button onClick={handleResult} className="btn merge2 active">=</button>



      </div>

    </div >
  );
}

export default App;

import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div className='betterview'>
        <h1 data-testid='counter' id="counterval">Counter{count}</h1>
        <button onClick={inc} data-testid='inc'>inc</button>
        <button onClick={dec} data-testid='dec' disabled={count===0}>dec</button>
    </div>
  )
}

export default Counter
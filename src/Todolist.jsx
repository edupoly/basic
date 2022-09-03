import React from 'react'

function Todolist() {
    const [todos,settodos] = React.useState([])
    const [task, setTask] = React.useState('')
    function addTask(){
        settodos([...todos,task])
    }
  return (
    <div className='betterview'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setTask(e.target.value)}} data-testid='inputtodo'/>
        <button onClick={addTask} data-testid='addbutton'>Add Task</button>
        <ul data-testid='todolist'>
        {
            todos.map((s,i)=>{
                return <li className="task" data-testid='todo' key={i}>{s}</li>
            })
        }
        </ul>
    </div>
  )
}
export default Todolist
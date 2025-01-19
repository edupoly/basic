import React from 'react'
export function abc(items,cb){
    for(let i=0;i<=items.length-1;i++){
        cb(items[i])
    }
}

function Todolist() {
    const [todos,settodos] = React.useState([])
    const [task, setTask] = React.useState('');
    function addTask(){
        settodos([...todos,task])
    }
    function deleteTask(ind){
        var temp = [...todos];
        temp.splice(ind,1)
        settodos([...temp])
    }
  return (
    <div className='betterview'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setTask(e.target.value)}} data-testid='inputtodo'/>
        <button onClick={addTask} data-testid='addbutton'>Add Task</button>
        <ul data-testid='todolist'>
        {
            todos.map((s,i)=>{
                return (
                <li className="task" data-testid='todo' key={i}>
                    {s}
                    <button onClick={()=>{deleteTask(i)}}>Delete</button>
                </li>)
            })
        }
        </ul>
    </div>
  )
}
export default Todolist
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 5th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 3:30pm',
        reminder:false,
    }
])
// add Task 
const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000);
  const newTask = {id,...task};
  setTasks([...tasks,newTask])
}
// delete task 
const deleteTask = (id)=>{
setTasks(tasks.filter((task)=>task.id !==id))
}
// toggle reminder 
const onReminder = (id)=>{
  setTasks(
tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">

      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onReminder}/> :'No Tasks'}
    </div>
  );
}

export default App;
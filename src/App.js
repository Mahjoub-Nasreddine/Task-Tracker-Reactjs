import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
const tasks1=[
  {
      id:1,
      text:'Doctors Appointment',
      day:'Feb 5th at 2:30pm',
      reminder: true, 

  },
  {
      id:2,
      text:'Meeting at school',
      day:'Feb 6th at 1:30pm',
      reminder: true,

  },
  {
      id:3,
      text:'Food Shopping',
      day:'Feb 5th at 2:30pm',
      reminder: false,

  },
  {
      id:4,
      text:'Meeting at Work',
      day:'Feb 8th at 8:30am',
      reminder: true,

  },
  {
      id:5,
      text:'Watching Movie Cinema',
      day:'Feb 9th at 8:00pm',
      reminder: false,

  }
]
function App() {
  const[tasks, setTasks]=useState(tasks1)
  const[show, setShow]=useState(false)
  //Delete Function
  const deleteTask =(id)=>{
     setTasks(tasks.filter((task)=> task.id !== id))
   } 

   // Reminder Function
   const toggleRminder =(id)=>{
setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder:!task.reminder}: task))   }

//Add task
const addTask=(task)=>{
  const id= Math.floor(Math.random()* 2500) +1
  const newTask={id, ...task}
  setTasks([newTask, ...tasks])

}
  return (
    <div className="container">
     <Header add={()=>setShow(!show)} etat={show ? 'Cancel' : 'Add' }/>
     {show && <AddTask onAdd={addTask}/>}
     { tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRminder} />
     ):
     'No Tasks to show'
    }
     </div>
  );
}

export default App;

import { useState } from 'react'
import Task from './components/Task'
import Form from './components/Form'
import styles from './components/formstyles.module.css'


function App() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleNewTask = e => {
    e.preventDefault()

    const taskObject = {
      text: newTask,
      isComplete: false
    }

    setTasks([...tasks, taskObject])
    setNewTask("")
  }

  const handleDelete = index => {
    const filteredTasks = tasks.filter((task, i) => {
      return i != index
    })
    setTasks(filteredTasks)
  }

  const handleComplete = index => {
    const updatedTasks = tasks.map((task, i) => {
      if (index == i ) {
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div className={styles.formContainer}>

      <Form newTask={newTask} setNewTask={setNewTask} handleNewTask={handleNewTask} />

      <div className="d-flex flex-column my-2">
        {tasks.map((task, i) => {
          const textDecoration = ["mx-3 "]
          if (task.isComplete) {
            textDecoration.push(" text-decoration-line-through ")
          }
          return <Task key={i} task={task} handleComplete={handleComplete} i={i} handleDelete={handleDelete} textDecoration={textDecoration} />
        })}
      </div>
    </div>
  );
}

export default App;

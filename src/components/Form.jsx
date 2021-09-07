import { useState } from 'react'

const Form = props => {
    return (
        <form onSubmit={(e) => { props.handleNewTask(e) }} className="form">
            <input onChange={(e) => { props.setNewTask(e.target.value) }} type="text" value={props.newTask} className="form-control my-3" style={{ maxWidth: 200 }} />
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form

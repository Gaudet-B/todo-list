import { useState } from 'react'

const Task = props => {
    return (
        <div className="d-flex flex-row my-3 align-items-center">
            <input onChange={(e) => { props.handleComplete(props.i) }} checked={props.task.isComplete} type="checkbox" className="form-check-input" />
            <h5 className={props.textDecoration}>{props.task.text}</h5>
            <button className="btn btn-danger" onClick={(e) => { props.handleDelete(props.i) }}>Delete</button>
        </div>
    )
}

export default Task

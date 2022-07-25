import React from "react";

import "./AddTask.css";

const AddTask = ({setTask, setPriority, addTask}) => {
    return (
        <div className="AddTask">
            <input type="text" id="task" placeholder="Add new task" onChange={e=>setTask(e.target.value)} />
            <select name="priority" id="priority" onChange={e=>setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button onClick={addTask}>+</button>
        </div>
    )
}

export default AddTask;
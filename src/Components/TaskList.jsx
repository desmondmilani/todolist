import React from "react";

import "./TaskList.css";


const TaskList = ({taskList, deleteTask}) => {
    return (
        <div className="TaskList">
            {
                taskList.map(task=>(
                    (
                        <div className={"Task " + task.priority} key={task.id}>
                            <h1>{task.task}</h1>
                            <button onClick={()=>deleteTask(task.id)}>Complete</button>
                        </div>
                    )
                ))
            }
        </div>
    )
}


export default TaskList;
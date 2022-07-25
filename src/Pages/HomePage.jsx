import React, { useEffect } from "react";

//imports my components
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";
import UserPanel from "../Components/UserPanel";

//import styling
import "./HomePage.css";



const HomePage = ({user, logout, setTask, setPriority, taskList, addTask, getTasks, deleteTask}) => {
    useEffect(()=>{
        getTasks();
    }, [])
    return (
        <div className="HomePage">
            <UserPanel user={user} logout={logout} />
            <div className="HomeContent">
               
                <AddTask setTask={setTask} setPriority={setPriority} addTask={addTask} />
                <TaskList taskList={taskList} deleteTask={deleteTask} /> 
            </div>
            
        </div>
    )
}

export default HomePage;
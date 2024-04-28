import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';

function TodoList() {

    const [tasks, setTasks] = useState(["Struggle", "Endure", "Contend"]);
    const [newTask, setNewTask] = useState("");
    const [showVideo, setShowVideo] = useState(false);
    let audio = new Audio("/heed_my_words.mp3")

    const startAudio = () => {
        audio.play();
    }

    function handleChange() {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask != ""){
            setTasks(t => [...t, newTask]);
            if (newTask.toLowerCase() === "ksipna ellhn") {
                setShowVideo(true);
            }
            else {
                setShowVideo(false);
            }
            setNewTask("");
        }

    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if (index > 0) {
            setTasks(t => {
                const newTasks = [...t]
                const temp = newTasks[index]
                newTasks[index] = newTasks[index - 1]
                newTasks[index - 1] = temp
                return newTasks
            })
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            setTasks(t => {
                const newTasks = [...t]
                const temp = newTasks[index]
                newTasks[index] = newTasks[index + 1]
                newTasks[index + 1] = temp
                return newTasks
            })
        }
    }


    return(
        <>    
                <button className="audioButton" onClick={startAudio}>🎵</button>
                <h2>Todo List</h2>
                <div className="drop"></div>
                <div className="wave"></div>
                <div className="inputContainer">
                    <input className="taskInput" value={newTask} onChange={handleChange} placeholder="Enter your task"/>
                    <button className="addTaskButton" onClick={addTask}>Add</button>
                </div>
                <div className="tasksContainer">
                    <ul>
                        {tasks.map((task, index) => 
                        <li key={index}>
                            {task}
                            <div className="buttonContainer">
                                <button onClick={() => moveTaskDown(index)}>🔻</button>
                                <button onClick={() => moveTaskUp(index)}>🔺</button>
                                <button onClick={() => deleteTask(index)}>☠️</button>
                            </div>
                        </li>)}
                    </ul>
                </div>
                <div className="videoContainer">
                    {showVideo && <YouTube videoId="ZRxqvMFetM4" />}
            </div>
        </>
    )
}

export default TodoList

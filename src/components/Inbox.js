import React, { useRef, useState } from 'react'


export default function Inbox(props) {
    const [newTask, setNewTask] = useState(false)
    const titleRef = useRef()
    const calenderRef = useRef() 
    const newTaskHandler=()=>{
        setNewTask(true)
    }
    const cancelHandler=()=>{
        setNewTask(false)
    }

    const addHandler=(e)=>{
        e.preventDefault()
        if(titleRef.current.value === ""){
            window.alert("Task cant be empty")
            return
        }
        const newObj = {
            number:props.list.length + 1,
            title: titleRef.current.value,
            date: new Date(calenderRef.current.value),
        }
        props.append(newObj)
        setNewTask(false)
    }
  return (
    <div>
        {!newTask && (<button className='btn' onClick={newTaskHandler}>Add task</button>)}
        {newTask && (
            <div class="form-group">
              <label for="newtask">Add task</label><br/>
              <input className='dateinput' type="date" ref={calenderRef} defaultValue="2023-06-01"></input><br/>
              <input className="todoinput" type="text" ref={titleRef} placeholder="Enter your task"/><br/>
              <button className='btn' onClick={addHandler}>Add task</button>
              <button className='btn' onClick={cancelHandler}>Cancel</button>
            </div>
        )}

        <div className='outbox'>
            <b>List of task will be shown here</b>
            {props.list.map((listItem)=>{
                return (<div className='box' key={listItem.number} >
                    -{'> '}{listItem.title} {listItem.date.toLocaleDateString()}
                    </div>)
            })}
        </div>
    </div> 
  )
}

import React from 'react'
import ListRender from './ListRender'

export default function Today(props) {
    console.log(props.list)
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        if(date.getFullYear() !== task.date.getFullYear()){
            return false
        }
        if(date.getMonth() !== task.date.getMonth()){
            return false
        }
        if(date.getDate() !== task.date.getDate()){
            return false
        }
        return true

    })
  return (
    <div>
        {props.list.length !== 0? (<ListRender list={filteredList}/>):"Nothing is added yet!"}
        
    </div>
  )
}

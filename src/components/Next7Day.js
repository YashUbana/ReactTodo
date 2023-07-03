import React from 'react'
import ListRender from './ListRender'

export default function Next7Day(props) {
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        const diffTime = task.date - date
        const diffDays = Math.ceil((diffTime)/(24*60*60*1000))
        if(diffDays>= 0 && diffDays < 8){
            return true
        }
        return false
    })
  return (
    <div>
        {props.list.length !== 0? (<ListRender list={filteredList}/>):"Nothing is added yet!"}
    </div>

  )
}

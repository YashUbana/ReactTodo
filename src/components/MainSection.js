import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Day from './Next7Day'

const list = []



export default function MainSection(props) {
    const [filteredList, setFilteredList] = useState(list)
    
    const addToList= (obj)=>{
        list.push(obj)
        setFilteredList(list)
    }
    
  return (
    <div className='main-section'>
        {props.active === "INBOX" && (<Inbox list={filteredList} append={addToList}/>)}
        {props.active === "TODAY" && (<Today list={filteredList}/>)}
        {(props.active === "NEXT" && (<Next7Day list={filteredList}/>))}
    </div>
  )
}

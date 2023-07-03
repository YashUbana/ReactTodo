import React from 'react'

export default function SideNav(props) {
  return (
    <div>
        <ul className='side-nav'>
            <li className="inbox" onClick={()=>{props.change("INBOX")}}><h1>+Task</h1></li>
            <li className="today" onClick={()=>{props.change("TODAY")}}><h1>Today</h1></li>
            <li className="next" onClick={()=>{props.change("NEXT")}}><h1>Next 7 Days</h1></li>
        </ul>
    </div>
  )
}

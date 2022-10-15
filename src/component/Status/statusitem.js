import React from 'react'
import './statusitem.css'

function statusitem(props) {
  return (
    <div className='flex items-center'>

        <div className='status-item-icon'>
            {
                props.text == "Live" ? 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#127BBF"/>
                </svg>
                : props.text == "Upcoming" ?
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#8184A3"/>
                </svg>
                : props.text == "Inventory" ?
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#1FD63C"/>
                </svg>
                : props.text == "Deal" ?
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#F7DE04"/>
                </svg>
                : ''
            }
        </div>        
        <span className='statusitem-text'>{props.text}</span>
        
    </div>
  )
}

export default statusitem

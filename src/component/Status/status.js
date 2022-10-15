import React from 'react'
import './status.css'

import StatusItem from './statusitem'

function status() {
  return (
    <div className='status-items grid grid-cols-4'>
        <div className='live-status flex justify-center'><StatusItem text="Live"/></div>
        <div className='upcoming-status flex justify-center'><StatusItem text="Upcoming"/></div>
        <div className='inventory-status flex justify-center'><StatusItem text="Inventory"/></div>
        <div className='deal-status flex justify-center'><StatusItem text="Deal"/></div>
    </div>
  )
}

export default status
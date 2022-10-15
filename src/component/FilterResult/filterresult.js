import React from 'react'
import './filterresult.css'

function filterresult() {
  return (
    <div className='filter-result w-full bg-white flex items-center  justify-between'>

        <div className='flex items-center h-full'>
            <span className='filteringby'>Filtering by:</span>

            <div className='filter-item flex bg-slate-600 items-center pr-2 pl-2'>
                <span className='filter-item-text text-white'>Year: 2018 </span>
                
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3.18201" y="3.8891" width="1" height="10" rx="0.5" transform="rotate(-45 3.18201 3.8891)" fill="white"/>
                    <rect x="10.2531" y="3.18198" width="1" height="10" rx="0.5" transform="rotate(45 10.2531 3.18198)" fill="white"/>
                </svg>
            </div>
        </div>

        <div className='sortby'>
            <select className='sortby-section'>
                <option>
                    Sort by
                </option>
            </select>

        </div>
    </div>
  )
}

export default filterresult
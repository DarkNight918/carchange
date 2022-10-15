import React from 'react'
import './carlistitem.css'

import InputLabelItem from './inputlabelitem'

import Car1 from '../../assets/img/car1.png';
import Car2 from '../../assets/img/car2.png';
import Car3 from '../../assets/img/car3.png';

function carlistitem(props) {
  return (
    <div>
        <div className={`car-list-item mt-5 flex car-list-item-${ props.status }`}>
            {/* Image of Car */}
            <img className='car-img' src={Car1} />

            <div className='flex row flex-col ml-8'>
                {/* Information of Car */}
                <h1 className='auction-car-name'>{props.name}</h1>
                <div className='mt-1'>
                    <span className='auction-ends-text'>Auction ends in </span> 
                    <span className='auction-ends-time'>00:00:{props.time}</span>
                </div>

                {/* Input Section */}
                <div className='flex'>
                    <div className='flex flex-col'>
                        <InputLabelItem label="Makes" text={props.makes} />
                        <InputLabelItem label="Color" text={props.color} />
                    </div>

                    <div className='right-labels flex flex-col'>
                        <InputLabelItem label="Mileage" text={props.mileage} />
                        <InputLabelItem label="Fuel Type" text={props.fueltype} />
                    </div>
                </div>

                {/* AED-Section */}
                <div className='aed-section'>
                    <div className='mt-5'>
                        <span className='aed-label'>Highest Bid:</span> 
                        <span className='aed-value'>{props.highestbid}</span>
                    </div>

                    <div className=''>
                        <span className='aed-label'>Seller's Price:</span> 
                        <span className='aed-value'>{props.sellersbid}</span>
                    </div>
                </div>
            </div>


            {
                props.status == "lastchance" ?
                <span className='status-label-lastchance'>Last Chance</span>
                : props.status == "live" ?
                <span className='status-label-live'>Live</span>
                : props.status == "deal" ?
                <span className='status-label-deal'>Deal</span>
                : ''
            }
            
        </div>

    </div>
  )
}

export default carlistitem

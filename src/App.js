import React from 'react';
import './App.css';

import OfferCountHeader from './component/OfferHeader/OfferCountHeader';
import FilterResult from './component/FilterResult/filterresult';
import Status from './component/Status/status';
import CarListItem from './component/CarListItem/carlistitem';

import Header from './component/Header/header'
import {useState} from 'react';

function App() {
  const [showCount, setShowCount] = useState([
    7,
    7
  ]);
  const setOptsCounts = (e) => {
    var temp = showCount;
    temp[e] = 10;
    setShowCount(e);
  };
  const [shYearOpts, setShYearOpts] = useState([
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
  ]);
  const [shMkOpts, setShMkOpts] = useState([
    'Aston Martin',
    'Lamborghini',
    'Ferarri',
    'Merceders',
    'BMW',
    'McLaren',
    'Bentley',
    'Aston Martin',
    'Lamborghini',
    'Ferarri',
    'Merceders',
    'BMW',
    'McLaren',
    'Bentley',
    'Aston Martin',
    'Lamborghini',
    'Ferarri',
    'Merceders',
    'BMW',
    'McLaren',
    'Bentley',
  ]);
  
  return (
    <div className="flex justify-center">
      <div className="app-body">
         <Header/>
         {/* content */}
         <div className='flex md:flex-row flex-col xl:justify-around justify-between lg:items-start'> 
            <div className='flex flex-row justify-center'> 
              
              <div className='searchOptionsBox xl:pl-28 lg:pl-11 pl-5 mt-20'>
                {/* F8FBFD */}
                <div className='cus_border bg-white'>
                  <div className='xl:w-96 w-72 cus_border bg-white cus_border flex flex-col justify-center h-24 '>
                    <div className='flex flex-row justify-between items-center text-lg'>
                      <div className='pl-6 pt-6 pb-5 text-[#8184A3]'>Showing <span className='text-[#1D7DBD]'>7</span> results<br/> of 237 items</div>
                      <div className='underline pr-6 text-[#1D7DBD] cursor-pointer text-semibold'>Reset All</div>
                    </div>
                  </div>
                  <div className='p-6 w-full option-container'>
                    <div className='cus_border text-xl'>
                      <div className='cus_border bg-[#F8FBFD] py-4 px-7 flex flex-row justify-between items-center'>
                        <p className='text-[#1E1E1E] font-bold'>Makes</p>
                        <div>
                          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.58002 0.326659L0.400024 1.51333L7.00002 8.10666L13.6 1.50666L12.42 0.326659L7.00002 5.74666L1.58002 0.326659Z" fill="#8184A3"/>
                          </svg>
                        </div>
                      </div>
                      <div className='px-7 flex flex-col flex-start pb-6 bg-white'>
                        {
                          shMkOpts.map((item, i) => {
                            if(i < showCount[0])
                            return (
                              <div className='flex flex-row items-center justify-start mt-6'>
                                <input id="default-checkbox" type="checkbox" value="" className="sh_checkbox w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <p className='ml-5'>{item}</p>

                              </div>
                            )
                          })
                        }
                      </div>

                      <div>

                      </div>
                      <div className='pb-5 text-center'>
                        <p className='text-[#1D7DBD] cursor-pointer font-semibold' onClick={() => {setOptsCounts(1)}}>See 132 more</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='p-6 w-full option-container'>
                    <div className='cus_border text-xl'>
                      <div className='cus_border bg-[#F8FBFD] py-4 px-7 flex flex-row justify-between items-center'>
                        <p className='text-[#1E1E1E] font-semibold'>Year</p>
                        <div>
                          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.58002 0.326659L0.400024 1.51333L7.00002 8.10666L13.6 1.50666L12.42 0.326659L7.00002 5.74666L1.58002 0.326659Z" fill="#8184A3"/>
                          </svg>
                        </div>
                      </div>
                      <div className='px-7 flex flex-col flex-start pb-6 bg-white'>
                        {
                          shYearOpts.map((item, i) => {
                            if(i < showCount[1])
                            return (
                              <div className='flex flex-row items-center justify-start mt-6'>
                                <input id="default-checkbox" type="checkbox" value="" className="sh_checkbox w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <p className='ml-5'>{item}</p>
                              </div>
                            )
                          })
                        }
                      </div>

                      <div>

                      </div>
                      <div className='pb-5 text-center'>
                        <p className='text-[#1D7DBD] cursor-pointer font-semibold' onClick={() => {setOptsCounts(2)}}>See 41 more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='app-content mt-20'>
              <div>
                <OfferCountHeader />
              </div>
              <div>
                <FilterResult />
              </div>
              <div className='mt-5'>
                <Status />
              </div>
              
              <div className='mt-5'>
                <CarListItem 
                  name="BMW M 850 2018" 
                  time="31" makes="BMW" 
                  mileage="35,000km" 
                  color="Grey" 
                  fueltype="Gasoline"
                  highestbid="AED 230,224"
                  sellersbid="AED 286,500"
                  status="lastchance" />
                  
                <CarListItem
                  name="BMW M 850 2018" 
                  time="31" 
                  makes="BMW" 
                  mileage="35,000km" 
                  color="Grey" 
                  fueltype="Gasoline"
                  highestbid="AED 230,224"
                  sellersbid="AED 286,500" 
                  status="live" />
                
                <CarListItem
                  name="BMW M 850 2018" 
                  time="31" 
                  makes="BMW" 
                  mileage="35,000km" 
                  color="Grey" 
                  fueltype="Gasoline"
                  highestbid="AED 230,224"
                  sellersbid="AED 286,500" 
                  status="deal" />

              </div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;

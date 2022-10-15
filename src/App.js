import './App.css';
import OfferCountHeader from './component/OfferHeader/OfferCountHeader';
import FilterResult from './component/FilterResult/filterresult';
import Status from './component/Status/status';
import CarListItem from './component/CarListItem/carlistitem';
function App() {
  return (
    <div className="flex justify-center">
      <div className="app-body">
         <div>Header</div>
         {/* content */}
         <div className='flex flex-row justify-around items-start w-full'> 
              <div className='app-left-filterbar'>
                search List boxes
              </div>

              <div className='app-content'>
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

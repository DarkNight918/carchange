import './App.css';

function App() {
  return (
    <div className="flex justify-center">
      <div className="app-body">
         <div>Header</div>
         {/* content */}
         <div className='flex flex-row justify-center items-start'> 
              <div>
                search List boxes
              </div>
              <div>
                <div>
                  filter
                </div>
                <div>
                  status
                </div>
                <div>
                  main car list
                </div>
              </div>
         </div>
      </div>
         
    </div>
  );
}

export default App;

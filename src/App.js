import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Users from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    
    <>
      <MainNavigation />
      <main>
        <Routes>
            <Route path='/' element={<Users />}  />
            <Route path='/places/new' element={<NewPlace />}  />
            <Route path='*' element={<h2 className='center'>Not found</h2>} />
          
        </Routes>

      </main>
    </>
  ) 
  
  
  

}

export default App;

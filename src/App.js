import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Users from './user/pages/User';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Users />}  />
        <Route path='/places/new' element={<NewPlace />}  />
        <Route path='*' element={<h2 style={{textAlign:'center'}}>Not found</h2>} />
        
        {/* <Route path='books'>
          <Route  index element={<h1>list of books</h1>}/>
          <Route path='new' element={<h1>new book</h1>} />
          <Route path='edit' element={<h1>edit book</h1>} />
        </Route> */}
      </Routes>
     
  ) 
  
  
  

}

export default App;

import Sport_TopBar from './pages/Sport_TopBar';
import Create_Sport from './pages/Create_Sport';
import Show_Sport from './pages/Show_Sport';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';



function App() {



  return (
    <Router>
      <div className='App'>

        <Routes>

          <Route path='/sport/owner' element={
            <>
              <Sport_TopBar/>
              <Show_Sport />
            </>
          }/>

          
          <Route path='/sport/owner/create' element={<Create_Sport />} />

        </Routes>


      </div>
    </Router>
  );
}

export default App;

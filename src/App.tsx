import React from 'react';

import './App.css';
import {Route,Routes} from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import Account from './pages/AccountPage/Account';
import Dashboard from './pages/Dashboard/Dashboard';

 
function App() {
  return (
    <div className="App">
       <div className='row'>
         <SideBar/>
         <div className='pages'>
           <Routes>
             <Route path="/" element={<Dashboard/>} />
             <Route path="/account" element={<Account/>} />
           </Routes>
         </div>
       </div>
    </div>
  );
}

export default App;

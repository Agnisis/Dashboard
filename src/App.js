import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
const App = () => {
  const activeMenu=true;
  return (
   <div>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
<div className='fixed right-4 buttom-4' style={{zIndex:'1000'}}>
  <TooltipComponent content="settings "position='top'>
    <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background:'blue',borderRadius:'50%'}}>
      <FiSettings/>
    </button>
  </TooltipComponent>
</div>
{activeMenu?(
  <div>
    sidebnar
  </div>
):(
  <div>
    sidebar
  </div>
)}
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App
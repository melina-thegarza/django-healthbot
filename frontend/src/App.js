import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RecordView from "./components/doctor/RecordView";
import Button from "./components/doctor/Button";
import Home from "./components/patient/Home";
import UpdateRecord  from './components/doctor/UpdateRecord';
 
const App = () =>{

    return (    
           
        <div className="Chatbot">

        <div className="nav-bar">
        <nav>
              <ul>
                <li><Button to ="" /></li>
                <li><Button to ="records" /></li>
              </ul>
               
            </nav>
        </div>
            
            <div className="main">
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path = "/records" element={<RecordView />} />
              <Route path = "/update/:id" element={<UpdateRecord />} />
              <Route path="*" element={<p>Path not resolved</p>} />
              </Routes>
            </div>
           
           
          
              

        </div>
   
    )

}

 


export default App;








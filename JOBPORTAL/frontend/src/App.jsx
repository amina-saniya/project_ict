import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './module1/Admin'
import Login from './module1/Login'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Userdashboard from './usermodule/Userdashboard'
import Browserjob from './usermodule/Browserjob'
import Viewappliedjob from './usermodule/Viewappliedjob'

import Navuser from './usermodule/Navuser.jsx'
import Admindashboard from './adminmodule/Admindashboard'
import Managejob from './adminmodule/Managejob'
import Viewuser from './adminmodule/Viewuser'
import Home from './module1/Home.jsx'
import Signup from './module1/Signup.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
  
  
    <Routes>
      <Route path='/admin'element={<Admin />}></Route>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/signin'element={<Signup/>}></Route>
      </Routes>
     

      <Routes>
      <Route path='/userdash'element={<Userdashboard/>}></Route>
     <Route path='/usernav'element={<Navuser/>}></Route> 
      <Route path='/browser'element={<Browserjob/>}></Route>
      <Route path='/viewappjob'element={<Viewappliedjob />}></Route>
     
      </Routes>
    
   
        <Routes>
        <Route path='/admindash'element={<Admindashboard/>}></Route>
      <Route path='/fulluser'element={<Viewuser/>}></Route>
      <Route path='/manjob'element={<Managejob />}></Route>
        </Routes>
    
     
     
      
  
  </div>
       
    </>
  )
}

export default App
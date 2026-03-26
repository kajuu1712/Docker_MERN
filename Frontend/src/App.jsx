import {Routes, Route} from 'react-router-dom';
import Signup from "./Components/Signup"
import Home from './Components/Home'
import Dashboard from './Components/Dashboard';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App

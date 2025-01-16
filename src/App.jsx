import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Search from './Components/Search'
import Transform from './Components/Transform'
import About from './About'
import Alert from './Components/Alert'
import Form from './Components/Form';


function App() {

  const [alert, setalert] = useState(null)
//alert = null;
  const Showalert = (msg, Type) => {
    setalert({
      message: msg,
      type: Type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  //alert = {
    // message: "transform into uppercase",
    //   type: "success"
//}
  return (
    <div>
      <BrowserRouter>
        <Navbar heading="React Tutorial" />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Transform Showalert={Showalert} />}></Route>
          <Route path='/about' element={<About alert={alert}/>}></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App

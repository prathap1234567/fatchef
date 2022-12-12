import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import './style.css'
import Desktop1 from './views/desktop1'
import HOMEPAGE from './views/h-o-m-e-p-a-g-e'
import Desktop2 from './views/desktop2'
import Frame1 from './views/frame1'
import Desktop4 from './views/desktop4'
import Desktop5 from './views/desktop5'
import Desktop6 from './views/desktop6'
function App (){
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HOMEPAGE/>}/>
    <Route path='Desktop1' element={<Desktop1/>}/>
    <Route path='Desktop2' element={<Desktop2/>}/>
    <Route path="Frame1" element={<Frame1/>}/>
    <Route path='Desktop4' element={<Desktop4/>}/>
    <Route path='Desktop6' element={<Desktop6/>}/>
    <Route path='Desktop5' element={<Desktop5/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;

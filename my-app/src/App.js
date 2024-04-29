import React from 'react'
import System from './system/System'
import About from './about/About'
import Contact from './contact/Contact'
import Shop from './shop/Shop'
import Shop2 from './shop2/Shop2'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<System/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/shop2" element={<Shop2/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App
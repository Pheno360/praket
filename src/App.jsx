
import { useState } from 'react'
import './App.css'
import Journey from './Journey'
import { Link, Route, Routes } from 'react-router-dom'
import Valentine from './Valentine'
import Home from './Home'
import Memories from './Memories'
import More from './More'
import Birthday from './Birthday'
import SplashCursor from './SplashCursor'

function App() {

  return (
    <>
    <SplashCursor />
<div>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/journey' element={<Journey/>} />
  <Route path='/valentine' element={<Valentine/>} />
  <Route path='/memories' element={<Memories/>} />
  <Route path='/more' element={<More/>} />
  <Route path='/birthday' element={<Birthday/>} />
</Routes>

</div>


    </>
  )
}

export default App

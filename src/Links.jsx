import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Links = () => {
  return (
    <div>
      <Routes>
 <Route path='/next' element={<Valentine/>} />
</Routes>
    </div>
  )
}

export default Links

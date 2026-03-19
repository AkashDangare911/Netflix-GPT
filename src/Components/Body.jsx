import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'

const Body = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Body

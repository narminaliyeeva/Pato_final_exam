import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Add from './pages/Add'

function App() {
  return (
    <Routes>
      <Route element={<Layout/>} path='/'>
        <Route index element={<Home/>} path='/'></Route>
        <Route element={<Admin/>} path='/admin'></Route>
        <Route element={<Add/>} path='/add'></Route>
      </Route>
    </Routes>
  )
}

export default App
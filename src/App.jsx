import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import LostItemListPage from './pages/LostItemListPage'
import FloorPage from './pages/FloorPage'
import styled from 'styled-components'
import Aside from './components/Aside'
import MainPage from './pages/MainPage'

function App() {
  console.log(document.querySelector(".header"))  
  
  return (
    <>
      <Header></Header>

      <BrowserRouter>
      <Routes>
        <Route element={<Aside/>}>
          <Route path="lostItemList" element={<LostItemListPage/>}/>
          <Route path="floor" element={<FloorPage/>}/>
        </Route>
        <Route path="/" element={<MainPage/>}/>
        
      </Routes>
      </BrowserRouter>
      
      
        

      
    </>
  )
}


export default App

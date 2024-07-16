import { useState } from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
import Header from './components/Atoms/Header'
import LostItemListPage from './pages/LostItemListPage'
import MainPage from './pages/MainPage'
import LostItem from './components/Modules/LostItem'
=======
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import LostItemListPage from './pages/LostItemListPage'
import FloorPage from './pages/FloorPage'
import styled from 'styled-components'
import Aside from './components/Aside'
import MainPage from './pages/MainPage'
>>>>>>> 5e3dd74f4c7a7d0bb9db06b1359d5a40b08f544f

function App() {
  console.log(document.querySelector(".header"))  
  
  return (
    <>
      <Header></Header>
<<<<<<< HEAD
      <MainPage></MainPage>
=======

      <BrowserRouter>
      <Routes>
        <Route element={<Aside/>}>
          <Route path="lostItemList" element={<LostItemListPage/>}/>
          <Route path="floor" element={<FloorPage/>}/>
        </Route>
        <Route path="/" element={<MainPage/>}/>
        
      </Routes>
      </BrowserRouter>
      
      
        

      
>>>>>>> 5e3dd74f4c7a7d0bb9db06b1359d5a40b08f544f
    </>
  )
}


export default App

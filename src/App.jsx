import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Atoms/Header'
import LostItemListPage from './pages/LostItemListPage'
import MainPage from './pages/MainPage'
import LostItem from './components/Modules/LostItem'

function App() {

  return (
    <>
      <Header></Header>
      <MainPage></MainPage>
    </>
  )
}

export default App

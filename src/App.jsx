import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PromoBlock from './components/PromoBlock/PromoBlock'
import ProductBlock from './components/ProductBlock/ProductBlock'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header/>
      <PromoBlock/>
      <ProductBlock/>
      <Footer/>
    </>
  )
}

export default App

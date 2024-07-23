import React, { useEffect, useState } from 'react'
import TblFunction from './components/TblFunction'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import './style/app.css'
const App = () => {
  const [data, setData] = useState();
  useEffect(() =>{
    const getData = async() =>{
      const res =  await fetch('http://localhost:3001');
      const table = await res.json();
      setData(table)
    }
    getData();
  },[])
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <TblFunction data={data}/>
      <Footer/>
    </div>
  )
}

export default App
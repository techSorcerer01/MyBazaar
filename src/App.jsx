import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AboutAndContact from './components/AboutAndContact'
import AllCategories from './components/AllCategories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      
      <main className='flex-grow'>
        <Hero></Hero>

        <AllCategories></AllCategories>

        
        <AboutAndContact></AboutAndContact>
        
      </main>
      <Footer></Footer>
     
    </div>
  )
}

export default App

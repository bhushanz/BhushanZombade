import React from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
 <>
 <div className='w-full min-h-screen  '>
 <Navbar/>
<Home/>
<About/>
<Projects/>
<Contact/>
  </div>
 
 </>
  )
  
}

export default App
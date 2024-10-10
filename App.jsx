import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Navboard from './components/Navboard'

const App = () => {
  const [category,setcategory] = useState("general");
  return (
    <div>
    <Navbar setcategory={setcategory}/>
    <Navboard category={category}/>
    </div>
  )
}

export default App
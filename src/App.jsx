import React from 'react'
import NavBar from './NavBar'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import './App.css'
import ThirdComponent from './Components/ThirdComponent'

const App = () => {
  return (
    <div>
        <NavBar/>
        {/* <hr /> */}
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
let myObj={
  name:"kanhai",
  phone:'9430085302'
}
let myArray=[1,2,3]

function App() {
 

  return (
    <>
  <h1 className='bg-green-400'>TailWind test</h1>
  <Card userName='kanhai'btntxt='View Profile ' someObject ={myObj}/>

  <Card userName='kanhai kumar'btntxt='kanhai profile'  someObject ={myObj}/>

    </>
  )
}

export default App

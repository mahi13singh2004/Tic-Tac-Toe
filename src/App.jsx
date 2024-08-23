import React from 'react'
import Board from './Components/Board'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
    <Analytics/>
    <div className='screen'>
        <Board/>
    </div>
    </>
  )
}

export default App
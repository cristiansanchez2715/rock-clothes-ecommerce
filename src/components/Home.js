import React from 'react'
import { useState } from 'react'
import SignIn from './SignIn'
import Help from './Help'

function Home() {
  return (
    <React.Fragment>
      <h1 className='title'>E-commerce Made With The Rocker In Mind</h1>
<SignIn />
<Help />
    </React.Fragment>
  )
}

export default Home
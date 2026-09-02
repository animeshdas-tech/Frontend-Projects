import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-white h-1/4 md:grid-cols-2 md:h-1/6 md:w-11/12 md:mx-auto md:inline-grid'>
      <div className='h-1/2 items-center inline-grid md:h-full'>
        <div className='md:mr-auto md:w-fit h-1/2 md:h-fit'>
          LOGO
        </div>
        <div className='md:mr-auto md:w-fit h-1/2 md:h-fit'>
          &copy; Copyright 2023. All Rights Reserved by DevUI.
        </div>
      </div>
      <div className='flex h-1/2 md:h-full w-1/2 md:w-1/2 md:right-0 justify-between mx-auto md:ml-auto md:mx-0 items-center'>
        <Link to='/'>
          About
        </Link>
        <Link to='/'>
          Contact
        </Link>
        <Link to='/'>
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default Footer
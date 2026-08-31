import './App.css'
import {Outlet} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authentication from './Auth'
import { login, logout } from './AuthSlice'
import Conf from './Conf'


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    authentication.getUser().then((data)=>{
      if (data) {
            dispatch(login({
              uid:data.uid,
              displayName:data.displayName,
              email:data.email,
              photoURL:data.photoURL
            }))
          }
    })
  },[])
  return(
    <div className='border-slate-500 border-8 rounded-2xl h-screen w-screen fixed top-0 left-0 overflow-auto'>
        <Header/>
          <div className=' '>
            <Outlet/>
          </div>
        <Footer/> 
    </div>
  )
}

export default App


// git init
// git add .
// git commit -m ""
// git push origin main
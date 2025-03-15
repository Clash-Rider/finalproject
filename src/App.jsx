import { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import conf from './conf/conf'
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = conf.tinymceAPI
    script.referrerPolicy = "origin";
    document.head.appendChild(script);
  }, []);

  const [loding, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoding(false))
  }, [])

  //console.log(conf) //deffrent for vit and react for vit (VITE_ )

  return !loding ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

import React from 'react'
import  logo from "../res/img/logo.png"
import '../res/css/Header.css'
export const Header = () => {
  return (
   <header>
     <img src={logo} alt="logo"/>
     <a href='#'>Home</a>
   </header>
  )
}

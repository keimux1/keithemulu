import React, { children, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CallToActionController = ({children}) => {
  const location = useLocation();
  
  const [showComponent,setshowComponent ]= useState(false)

  useEffect(() =>{
    if (location.pathname === "/contact"){
      setshowComponent(true) 
    }else {
      setshowComponent(false) 
    } 
    
  },[location])
  
  return (
    <div>
      {!showComponent && children }
    </div>
  )
}

export default CallToActionController

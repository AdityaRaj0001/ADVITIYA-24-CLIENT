'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Home = () => {

  const router=useRouter()
  return (
    <div>
      <p>Home</p>
      <a onClick={()=>{router.push('/')}}>Go to start</a>

  
    </div>
    
  )
}

export default Home
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Auth  = () => {

    const Router=useRouter();

  return (
    <>
    <div >Auth </div>
    <a onClick={()=>{Router.push('/')}}>Go to start</a>
    
    </>
    
  )
}

export default Auth 
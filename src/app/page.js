'use client'
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className='flex flex-col text-lg'>

      <h1>This is Start Page. Below are links to various sections of the pages</h1>

      <Link href="/home">Go to Home</Link>
      <Link href="/auth">Go to auth</Link>
      <Link href="/events">Go to events</Link>
      <Link href="/accommodation">Go to accommodation</Link>
      <Link href="/aboutus">Go to About Us</Link>
    </div>
    

    
  )
}

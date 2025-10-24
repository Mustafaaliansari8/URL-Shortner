import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
 <nav className='h-18 bg-purple-700 flex justify-between px-3 items-center text-white'>
    <div className="logo font-bold text-2xl">
       <Link href="/">BitLinks</Link>
    </div>
    <ul className='flex justify-center items-center gap-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/Shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className='flex gap-3'>
            <Link href="/Shorten"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold">Try now</button></Link>
            <Link href="/github"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold">Github</button></Link>
        </li>
    </ul>
 </nav>
  )
}

export default Navbar

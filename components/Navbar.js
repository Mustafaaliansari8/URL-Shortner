import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
 <nav className='h-auto bg-purple-700 flex flex-col md:flex-row justify-between px-3 py-4 items-center text-white'>
    <div className="logo font-bold text-xl md:text-2xl mb-4 md:mb-0">
       <Link href="/">BitLinks</Link>
    </div>
    <ul className='flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-auto'>
        <Link href="/" className='hover:text-purple-200'><li>Home</li></Link>
        <Link href="/about" className='hover:text-purple-200'><li>About</li></Link>
        <Link href="/Shorten" className='hover:text-purple-200'><li>Shorten</li></Link>
        <Link href="/contact" className='hover:text-purple-200'><li>Contact us</li></Link>
        <li className='flex flex-col sm:flex-row gap-3 mt-2 md:mt-0'>
            <Link href="/Shorten"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-2 font-bold text-sm w-full sm:w-auto">Try now</button></Link>
            <Link href="https://github.com/Mustafaaliansari8"><button className="cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-2 font-bold text-sm w-full sm:w-auto">Github</button></Link>
        </li>
    </ul>
 </nav>
  )
}

export default Navbar
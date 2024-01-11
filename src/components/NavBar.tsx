import React from 'react'

export default function NavBar() {
  return (
    <div className='nav-bar text-white'>
        <div className="nav-belt subpixel-antialiased flex justify-between items-center px-28 py-8">
            <div className='font-bold text-4xl'>Oyindamola</div>
            <ul className="routes text-lg flex gap-10">
                <li>About me</li>
                <li>Services</li>
                <li>Contact me</li>
            </ul>
        </div>
    </div>
  )
}



import React from 'react'

function Header() {

  return (
    <div className='flex justify-around'>

<h1 className='text-red-500'>my logo</h1>
<ul className='flex space-x-6'>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

    </div>
  )
}



export default Header
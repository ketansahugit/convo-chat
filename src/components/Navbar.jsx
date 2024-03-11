import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Convo Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/20270867/pexels-photo-20270867/free-photo-of-hannu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
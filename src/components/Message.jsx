import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/19567574/pexels-photo-19567574/free-photo-of-man-and-woman-near-pond-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
       <img src="https://images.pexels.com/photos/19567574/pexels-photo-19567574/free-photo-of-man-and-woman-near-pond-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
      </div>
    </div>
  )
}

export default Message
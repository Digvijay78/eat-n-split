import React from 'react'

const Button = ( {children ,handleAddFriend  } ) => {
  return (
    <button className='button' onClick = {handleAddFriend}  > {children} </button>
  )
}

export default Button
import React from 'react'
import Friend from './Friend'

const FriendList = ({newFriendList, onSelection, selectedFriend}) => {
    const friendLists = newFriendList
    
  return (
    <ul>

  {friendLists.map((friend) =>  <Friend key={friend.id} friend={friend} onSelection = {onSelection} selectedFriend={selectedFriend} />)}
  
    </ul>
  )
}

export default FriendList
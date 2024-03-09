
import './App.css';
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import Button from './components/Button';
import { useState } from 'react';




function App() {

  const [addFriend , setAddFriend] = useState(false)
  
  function handleAddFriend(){
    setAddFriend(prevF => !prevF);
  }
  
  
  
  const initialFriends = [
    
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [newFriendList , setNewFriendList] = useState(initialFriends)
  const [selectedFriend , setSelectedFriend] = useState(null)
  
  function handleSelectFriend(friend){
     setSelectedFriend(curr => curr?.id === friend.id ? null : friend)
     setAddFriend(false)
  }
  
  function handleSplitBill(value){
    setNewFriendList(friend => friend.map((f) =>  f.id === selectedFriend?.id ? {...f, balance : f.balance + value } : f ) )
  }
  

  
  return (
    <div className="app">
       <p> hello </p>
       <div className='sidebar' >
          <FriendList newFriendList= {newFriendList} onSelection={handleSelectFriend} selectedFriend={selectedFriend} />
          { addFriend && <FormAddFriend addFriend={addFriend} setNewFriendList={setNewFriendList} setAddFriend={setAddFriend} />}
         
          <Button handleAddFriend ={handleAddFriend}> {addFriend ? "Close" : "Add Friend"}</Button>
       </div>
         { selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill = {handleSplitBill} key= {new Date()} />}
    </div>
  );
}

export default App;

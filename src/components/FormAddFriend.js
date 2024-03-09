import React, { useState } from 'react'
import Button from "./Button"

const FormAddFriend = ({ setAddFriend,setNewFriendList }) => {

  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")
  

 function handleSubmit(e){
  e.preventDefault();
  const id = crypto.randomUUID();
  const newFriend = {
     name,
     image : `${image}?=${id}` ,
     balance:0, id :id
    }
       
     setName("")
     setImage("https://i.pravatar.cc/48")
    //  console.log(newFriend)

     setNewFriendList(prevF => [...prevF, newFriend])
     setAddFriend(false)
    }

  return (
    
      <div>
      <form className='form-add-friend' onSubmit={handleSubmit} >
      <label> 🧑‍🤝‍🧑 Friend name</label>
      <input type='text' value ={name} onChange ={(e) => setName(e.target.value)} />
      <label> 🖼️ Image Url</label>
      <input type='text' value ={image} onChange ={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
      </form>
      </div>
   
    
  )
}

export default FormAddFriend
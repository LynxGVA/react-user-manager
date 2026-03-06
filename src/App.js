import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"
 
const baseUrl = "https://randomuser.me/api/?results=5"

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
     axios.get(baseUrl).then((res) => {
      
      const formattedUsers = res.data.results.map((user, index) => ({
        id: index + 1,
        firstname: user.name.first,
        lastname: user.name.last,
        bio: "User from API",
        age: user.dob.age,
        isHappy: Math.random() > 0.5
      }))
      setUsers(formattedUsers)
    })
  }, [])

const addUser = (user) => {
  const id = users.length + 1
  setUsers([...users, {id, ...user}])
}

const deleteUser = (id) => {
  setUsers(
       users.filter((el) => el.id !== id)
      )
    }

const editUser = (user) => {
  setUsers(
    users.map((el) => el.id === user.id ? user : el)
  )
}

 return (
  <div>
    <Header title="List of Users"/>
    <main>
      <Users users={users} onDelete = {deleteUser} onEdit = {editUser}/>
    </main>
    <aside>
      <AddUser onAdd={addUser}/>
    </aside>
  </div>)
}

export default App

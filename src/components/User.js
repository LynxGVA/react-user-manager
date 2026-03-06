import React, { useState } from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

const User = ( {user, onDelete, onEdit} ) => {

    const [isEditing, setForm] = useState(
        false
    )

    return (
        <div className="user">
        <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon"/>
        <IoHammerSharp onClick={() => { setForm(prev => !prev) }}className="edit-icon"/>
         <h3>{user.firstname} {user.lastname}</h3>
         <p>{user.bio}</p>
         <p>{user.age}</p>
         <b>{user.isHappy ? "The user is happy =)" : "The user isn't happy"}</b>
         { isEditing && (<AddUser onAdd={(updatedUser) => {onEdit(updatedUser); setForm(false)}} initialData={user}/>)}
                </div>
    )
}

export default User         
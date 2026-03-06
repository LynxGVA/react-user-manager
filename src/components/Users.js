import React, { useState } from "react";
import User from "./User"

const Users = ({ users, onDelete, onEdit }) => {

    if(users.length > 0){
        return(
        <div>
            {users.map((element) => (
                <User onDelete={onDelete} onEdit={onEdit} key={element.id} user={element}/>
            ))}
        </div>
    )
    }else{
        return(
        <div className="user">
            <h3>No users found</h3>
        </div>
    )
    }
}

export default Users
import React, { useState } from "react";

const AddUser = ({ onAdd, initialData }) => {
    
    const initialState = initialData || {
        firstname: "",
        lastname: "",
        bio: "",
        age: "",
        isHappy: false
    }

    const [user, setUser] = useState(initialState)

    return (
        <form>
            <input placeholder="First Name" value={user.firstname} onChange={(el) => setUser({...user, firstname: el.target.value})}/>
            <input placeholder="Last Name" value={user.lastname} onChange={(el) => setUser({...user, lastname: el.target.value})}/>
            <textarea placeholder="Bio" value={user.bio} onChange={(el) => setUser({...user, bio: el.target.value})}></textarea>
            <input placeholder="Age" value={user.age} onChange={(el) => setUser({...user, age: Number(el.target.value)})}/><br/>
            <label htmlFor="isHappy">Is User happy?</label>
            <input checked={user.isHappy} type="checkbox" id="isHappy" onChange={(el) => setUser({...user, isHappy: el.target.checked})}/>
            <button type="button" onClick={() => {
                onAdd(user) 
                setUser(initialState)}}>Add</button>
        </form>
    )
}

export default AddUser
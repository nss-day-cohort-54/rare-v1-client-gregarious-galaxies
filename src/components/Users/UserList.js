import React, { useEffect, useState } from "react";
import { getUsers } from "./UserManagement";
import "./UserList.css"


export const UserList = () => {
    const[users, setUsers]= useState([])

    useEffect(()=>{
        getUsers()
        .then(uData => setUsers(uData))
    },
        []
    )

    return(
        <>
        {
            users.map(user => {
                return <div key={user.id} className="userInfo">
                    <p className= "userName">{user.username}</p>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.email}</p>
                </div>
            })
        }
        </>
    )
}
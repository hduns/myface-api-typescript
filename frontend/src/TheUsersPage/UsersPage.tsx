import { useEffect } from "react";
import { useState } from 'react'

type Users = {
    profileImageUrl: string,
    username: string,
    
    }

export default function UsersPage() {

    const [users, setUsers] = useState<Users[]>()

    useEffect(() => {
        fetch("http://localhost:3001/users").then(response => response.json()).then(data => setUsers(data.results))
    }, []);

    if(!users) {
        return <p>No users here...</p>
    }
     return (
        <div id="user-feed">
                {users.map((user, index) => {

                        return (
                            <div id="user-container" key={index}>
                                <div id="image-profile-container">
                                    <img src={user.profileImageUrl}/>
                                </div>
                                <div id="userName">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                      )  
                })}
        </div>
    )
}
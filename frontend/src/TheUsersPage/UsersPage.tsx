import { useEffect } from "react";
import { useState } from 'react';
import "../App.scss";

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
                            <div className="user-container" key={index}>
                                <div className="image-profile-container profile-image">
                                    <img src={user.profileImageUrl} />
                                </div>
                                <div className="userName">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                      )  
                })}
        </div>
    )
}
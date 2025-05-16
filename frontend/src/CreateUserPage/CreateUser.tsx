import { useEffect } from "react";
import { useState } from 'react';


type FormData = {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
    }


export default function CreateUser() {
    const [newUserData, setNewUserData ] = useState<FormData>({} as FormData);
    const [message, setMessage ] = useState<string>('');
    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    const pattern = event.target.pattern;
    
    if (name != "email") {
        if (new RegExp(pattern).test(value)) {
            setMessage("");
        } else {
            switch(name) {
                case "name":
                    setMessage("Names can only contain letters and spaces");
                    break;
                case "username":
                    setMessage("Usernames must be lowercase with no spaces");
                    break;
            }
        }
    } else {
        setMessage("Please complete a valid email address");
        let emailRegex =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

        if (emailRegex.test(value)) {
            setMessage("");
        }
    }
    setNewUserData(values => ({...values, [name]: value}));
  };


 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch("http://localhost:3001/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        name: newUserData.name,
        username: newUserData.username,
        email: newUserData.email,
        coverImageUrl: newUserData.coverImageUrl,
        profileImageUrl: newUserData.profileImageUrl,
    }),
    })
 };


    return (

        <form className="CreateNewUserForm"  onSubmit={handleSubmit}> 
            <div>
                <p>{message}</p>
            </div>
            <label className="newUserName">
                <p id="Name">Name:</p>
                <input id="NameInput" type="text" name="name" pattern="[a-zA-Z ]+$" placeholder="Enter name here" value={newUserData.name || ""} onChange={handleChange} required/>
            </label>
            
            <label className="newUserUserame">
                <p id="Username">Username:</p>
                <input id="UsernameInput" type="text" name="username" pattern="[a-z0-9]+$" placeholder="Enter username here" value={newUserData.username || ""} onChange={handleChange} required/>

            </label>

            <label className="newUserEmail">
                <p id="Email">Email:</p>
                <input id="EmailInput" type="text" name="email" placeholder="Enter email here"  value={newUserData.email || ""} onChange={handleChange}  required/>
            </label>
            
            <label className="newUserProfileImageUrl">
                <p id="ProfileImageUrl">Profile Image Link:</p>
                <input id="ProfileImageUrlInput" type="url" name="profileImageUrl"  placeholder="Enter profile image link here"  value={newUserData.profileImageUrl || ""} onChange={handleChange} required/>
            </label>
            
            <label className="newUserCoverImageUrl">
                <p id="CoverImageUrl">Cover Image Link:</p>
                <input id="CoverImageUrlInput" type="url" name="coverImageUrl"  placeholder="Enter cover image link here" value={newUserData.coverImageUrl || ""} onChange={handleChange} required/>
            </label>

            <button type="submit" id="submit">Submit</button>
        </form>

    );
};

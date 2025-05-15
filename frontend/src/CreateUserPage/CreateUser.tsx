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
    const [NewUserData, setNewUserData ] = useState<FormData>({} as FormData);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewUserData(values => ({...values, [name]: value}));
  };


 const handleSubmit = (event: any ) => {
    event.preventDefault();
    alert(NewUserData)
 };


    return (

        <form className="CreateNewUserForm"  method="post" action="/routes/userRoutes/users/create" onSubmit={handleSubmit}> 
            <label className="newUserName">
                <p id="Name">Name:</p>
                <input id="NameInput" type="text" name="name" pattern="[a-zA-Z ]+" placeholder="Enter name here" value={NewUserData.name || ""} onChange={handleChange} required/>
            </label>
            
            <label className="newUserUserame">
                <p id="Username">Username:</p>
                <input id="UsernameInput" type="text" name="username" pattern="[a-z0-9]+" placeholder="Enter username here" value={NewUserData.username || ""} onChange={handleChange} required/>
            </label>
{/* pattern="/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/g" */}
            <label className="newUserEmail">
                <p id="Email">Email:</p>
                <input id="EmailInput" type="email" name="email"  placeholder="Enter email here"  value={NewUserData.email || ""} onChange={handleChange}  required/>
            </label>
            
            <label className="newUserProfileImageUrl">
                <p id="ProfileImageUrl">Profile Image Link:</p>
                <input id="ProfileImageUrlInput" type="url" name="profileImageUrl"  placeholder="Enter profile image link here"  value={NewUserData.profileImageUrl || ""} onChange={handleChange} required/>
            </label>
            
            <label className="newUserCoverImageUrl">
                <p id="CoverImageUrl">Cover Image Link:</p>
                <input id="CoverImageUrlInput" type="url" name="coverImageUrl"  placeholder="Enter cover image link here" value={NewUserData.coverImageUrl || ""} onChange={handleChange} required/>
            </label>

            <button type="submit" id="submit">Submit</button>
        </form>

    );
};


// e: React.ChangeEvent<HTMLInputElement> 

//changeData = (e: React.MouseEvent<HTMLInputElement>): void => { // code }

// function handleChange(e: React.ChangeEvent<HTMLInputElement>)



{/* <form method="post" action="/users/create">
    <label class="createUserLabel">
        <p id="name">Name:</p>
        <input id="nameInput" type="text" name="name" pattern="[a-zA-Z ]+" placeholder="Enter name here" required/>
    </label>
</form> */}
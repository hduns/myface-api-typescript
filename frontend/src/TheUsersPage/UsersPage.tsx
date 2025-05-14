import { useEffect } from "react";

export default function UsersPage(props: {myData: JSON, setMyData: (data: JSON) => void}) {
    useEffect(() => {
        fetch("http://localhost:3001/users").then(response => response.json()).then(data => props.setMyData(data.results))
    }, []);

    for (let key in props.myData) {
    const value = props.myData[key];
    console.log(value)
    }

    if(!props.myData) {
        return <p>No users here...</p>
    }

     return (
        <div id="user-feed">
                {Object.keys(props.myData).map(key => {
                        const value = props.myData[key];
                        return (
                            <div id="user-container">
                                <div id="image-profile-container">
                                    <img src={value.profileImageUrl}/>
                                </div>
                                <div id="userName">
                                    <p>{value.username}</p>
                                </div>
                            </div>
                      )  
                })}
        </div>
    )
}
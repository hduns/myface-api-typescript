import { useEffect } from "react";

export default function UsersPage(props: {myData: JSON, setMyData: (data: JSON) => void}) {
    useEffect(() => {
        fetch("http://localhost:3001/users").then(response => response.json()).then(data => props.setMyData(data.results))
    }, []);
import { useEffect } from "react";

// export function ImageSelector(props: {srcUrl: string, setNewUrl: (url: string) => void}) {


export default function PostsPage(props: {myData: JSON, setMyData: (data: JSON) => void}) {
    useEffect(() => {
        fetch("http://localhost:3001/posts").then(response => response.json()).then(data => props.setMyData(data.results))
    }, []);

// console.log('test', props.myData)
// console.log('test', typeof props.myData)

for (let key in props.myData) {
    const value = props.myData[key];
    console.log(value)
    console.log(value.imageUrl)
}

    if(!props.myData) {
        return <p>No posts here...</p>
    }

    return (
        <div id="post-feed">
                {Object.keys(props.myData).map(key => {
                        const value = props.myData[key];
                        return (
                            <div id="post-container">
                                <div id="image-container">
                                    <img src={value.imageUrl}/>
                                </div>
                                <div id="poster-information">
                                    <p>{value.postedBy.username}</p>
                                    <p>{value.createdAt}</p>
                                </div>
                                <div id="caption-container">
                                    <p>{value.message}</p>
                                </div>
                            </div>
                        )
                })}
        </div>
    )
}
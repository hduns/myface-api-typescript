import { useEffect } from "react";
import { useState } from 'react'

// export function ImageSelector(props: {srcUrl: string, setNewUrl: (url: string) => void}) {

type Posts = {
    imageUrl: string,
    message: string,
    createdAt: string,
    postedBy: {
        userName: string,
    key: string
    }
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Posts[]>()

    useEffect(() => {
        fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts(data.results))
    }, []);

    if(!posts) {
        return <p>No posts here...</p>
    }

    return (
        <div id="post-feed">
                {Object.keys(posts).map(key => {
                        const value = posts[key];
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
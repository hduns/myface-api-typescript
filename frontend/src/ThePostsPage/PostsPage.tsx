import { useEffect } from "react";
import { useState } from 'react'

// export function ImageSelector(props: {srcUrl: string, setNewUrl: (url: string) => void}) {

type Posts = {
    imageUrl: string,
    message: string,
    createdAt: string,
    postedBy: {
    username: string,
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
                {posts.map((post, index)=> {
                       
                        return (
                            <div id="post-container" key= {index}>
                                <div id="image-container" >
                                    <img src={post.imageUrl}/>
                                </div>
                                <div id="poster-information">
                                    <p>{post.postedBy.username}</p>
                                    <p>{post.createdAt}</p>
                                </div>
                                <div id="caption-container">
                                    <p>{post.message}</p>
                                </div>
                            </div>
                        )
                })}
        </div>
    )
}
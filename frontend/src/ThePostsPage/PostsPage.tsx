import { useEffect } from "react";
import { useState } from 'react';
import dayjs from 'dayjs';
import { idText } from "typescript";


// export function ImageSelector(props: {srcUrl: string, setNewUrl: (url: string) => void}) {


type Posts = {
    imageUrl: string,
    message: string,
    createdAt: string,
    postedBy: {
    username: string,
    },
    likedBy: {
        length: number,
    },
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Posts[]>()
    
    useEffect(() => {
        fetch("http://localhost:3001/posts").then(response => response.json()).then(data => {
            setPosts(data.results);
    })
    }, []);
    

    if(!posts) {
        return <p>No posts here...</p>
    }

    const handleLikePost = () => {
    // event.preventDefault();

    fetch(`http://localhost:3001/posts/${postID}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        id: postID,
    }),
    })
 };

     const handleDislikePost = () => {
    //event.preventDefault();
    console.log(postID);
    fetch(`http://localhost:3001/posts/${postID}/dislike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        id: postID,
    }),
    })
 };

    return (

        <div id="post-feed">
                {posts.map((post, index)=> {

                        return (
                            <div className="post-container" key= {index}>
                                <div className="image-container" >
                                    <img src={post.imageUrl}/>
                                </div>
                                <p>{post.likedBy.length}</p>
                                    <div className="button-container">
                                    <div className="like-button">
                                    <form onSubmit={handleLikePost}>
                                        <button type="submit"><i className="fa fa-thumbs-up">Like</i></button>
                                    </form>
                                    </div>
                                    
                                    <div className="dislike-button">
                                    <form onSubmit={handleDislikePost}>
                                        <button type="submit"><i className="fa fa-thumbs-down">Dislike</i> </button>
                                    </form>
                                    </div>
                                </div> 

                                <div className="poster-information">
                                    <p className="postUserName">{post.postedBy.username}</p>
                                    <p className="postCreated">{dayjs(post.createdAt).format("DD/MM/YYYY")} </p>                            
                                    <p className="postMessage">{post.message}</p>
                                </div>
                            </div> 
                        ) 
                })}
        </div>
    )
}
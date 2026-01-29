import Post from "./post";
import classes from "./post.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";

function PostList({ isPosting, onStopPosting }){

    useEffect(()=> {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
        }

        fetchPosts();
    }, []);

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return <>
    
    {isPosting && (
        <Modal onClose={onStopPosting}> 
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>)}

    {posts.length>0 && (
        <ul className={classes.postlist}>
            {posts.map((posts) => <Post key={posts.body} Author={posts.author} m={posts.body}/>)}
        </ul>
    )}

    {posts.length===0 && (
        <div className="text-center text-amber-50">
            <h2>There are no post yet</h2>
            <p>Start addming some!</p>
        </div>
    )}


    </>
}

export default PostList;
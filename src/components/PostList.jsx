import Post from "./post";
import classes from "./post.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostList(isPosting, onStopPosting){

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    function handleAuthorChange(event){
        setAuthor(event.target.value);
    }
    function handleMessageChange(event){
        setMessage(event.target.value);
    }

    return <>
    
    {isPosting&& <Modal onClose={onStopPosting}> <NewPost onMessageChange={handleMessageChange} onAuthorChange={handleAuthorChange}/></Modal>}

    <ul className={classes.postlist}>
        <Post Author={author} m={message}/>
        <Post Author="Pema" m="Hey this is pema's mall"/>
        <Post Author="Pema" m="Hey this is pema's mall"/>
        <Post Author="Pema" m="Hey this is pema's mall"/>
    </ul>
    </>
    
    
}

export default PostList;
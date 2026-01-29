import { useState } from "react";
import classes from "./post.module.css";
import { Button } from "./ui/button";

export default function NewPost({onCancel, onAddPost}) {

    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    function bodyChangeHandler(event){
        setBody(event.target.value);
    }
    function authorChangeHandler(event){
        setAuthor(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const postData = {
            body:body,
            author:author
        };

        onAddPost(postData);
        console.log(postData);
        onCancel();
    }


    return <form action="" className={classes.newpost} onSubmit={submitHandler}>
        
                <label htmlFor="message">message</label>
                <textarea required name="" id="message" onChange={bodyChangeHandler}></textarea>

                <label htmlFor="author">Author</label>
                <input required type="text" id="author" onChange={authorChangeHandler}/>

                <div className="flex justify-end gap-2 mt-4">
                    <Button variant="ghost" type ="button" onClick={onCancel}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </div>

            </form>
}
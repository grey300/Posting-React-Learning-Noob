import classes from "./post.module.css";

export default function NewPost(Props) {
    return <form action="" className={classes.newpost}>
        
        <label htmlFor="message">message</label>
        <textarea name="" id="message" onChange={Props.onMessageChange}></textarea>

        <label htmlFor="author">Author</label>
        <input type="text" id="author" onChange={Props.onAuthorChange}/>
    </form>
}
import classes from "./post.module.css";

function Post({ Author, m }){
    return <li className={classes.post}>
        <p>{Author}</p>
        <p className="text-sm text-cyan-500">{m}</p>
    </li>
}

export default Post;
import classes from "./post.module.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Post(Props){
    return <li className={classes.post}>
        <p>{Props.Author}</p>
        <p className="text-sm text-cyan-500">{Props.m}</p>
    </li>
}

export default Post;
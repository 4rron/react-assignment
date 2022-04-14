import axios from "axios";
import { extension, postUrl } from "./sources";


async function GetPost(postId: string, index?: number){
    try {
        const fullPostUrl = postUrl + postId + extension;
        const post = await axios.get(fullPostUrl);        
        return post.data;
    } catch (error) {
        console.error("(GetPost) ERROR");
    }
}
    

export default GetPost;
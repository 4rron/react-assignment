import axios from "axios";
import { HNPost } from "./interfaces";
import GetPost from "./getPost";
import { recentUrl } from "./sources";

async function GetRecentPosts() {
    let baseUrl: string = recentUrl;
    try {
        const response = await axios.get(baseUrl);
        const postIds = response.data;
        const postData: Array<HNPost> = await Promise.all(postIds.map((element: string, index: number) => GetPost(element, index)))
        return postData;
    } catch (error) {
        let errorPost: Array<HNPost> = [{
            by:'Error',
            descendants: 0,
            id: 0,
            score: 0,
            time: 0,
            title: 'Error',
            type: 'Error'
            }];
        console.error("(GetRecentPosts) ERROR");
        return errorPost;
    }
}

export default GetRecentPosts;
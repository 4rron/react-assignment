import GetRecentPosts from './getRecentPosts';
import { HNPost } from './interfaces';
import { useEffect, useState } from 'react';

function PostHook(){
    const [data, setData] = useState<Array<HNPost>>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        setLoading(true);
        GetRecentPosts()
            .then((posts) => {
                setData(posts);                
                setLoading(false);
            })
            .catch((error) => {
                console.error("(Post Hook)", error);
                setLoading(false);
            })
    }, [])
    
    return {loading, data}
}

export default PostHook;
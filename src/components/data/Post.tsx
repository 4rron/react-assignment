import React from 'react';
import { HNPost } from './interfaces';
import '../../styles/feed/feed.css'

function Post(input: any, { data }: {data: HNPost}) {
console.log('Input: ', input);
    let plural: boolean = false;
    let link: string = 'feed-item has-link';
    if (input.post.score > 1){
        plural = true;
    }
    if (!input.post.url){
        link = 'feed-item no-link';
    }

    return(
        <a href={input.post.url}>
            <span className={link}>
                <div className='feed-title'>{input.post.title}</div>
                {plural ? (
                    <div className='feed-points'>{input.post.score.toString()} points </div>
                ) : (
                    <div className='feed-points'>{input.post.score.toString()} point </div>
                )}
                    <div className='feed-author'>| Author: {input.post.by} | </div>
                    <div className='feed-time'>{Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(input.post.time * 1000)}</div>
            </span>
        </a>
    )
}

export default Post;
import React from "react";
import PostHook from "../../data/postHook";
import Post from "../../data/Post";
import setHeader from "./setHeader";
import "../../../styles/recent/recent.css"

function Recent() {
    const {loading, data} = PostHook();
    setHeader("Recent");
    // data.map((element) => {
    //     console.log(element);
        
    // }
    // )

    return(
        <React.Fragment>
            {loading ? (
                <div className="loading"></div>
            ) : (
                <React.Fragment>
                    {data.map((element) => (
                        <Post key={element.id} post={element} />
                    ))}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Recent;
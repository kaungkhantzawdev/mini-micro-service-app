import React from "react";

const CommentList = ({ comments }) => {
    
    return (
        <div className="">
            <ul>
                {
                    Object.values(comments).map((obj,i) => (
                        
                        <li key={i}>
                            <span>{obj.content}</span>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default CommentList
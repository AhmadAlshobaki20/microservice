import React from "react";

export default ({ comment }) => {
    console.log(comment)
    return (
        <li>{comment.content}</li>
    )
}
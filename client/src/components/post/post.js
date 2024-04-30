import React from "react";
import CreateComment from "../comment/createComment";
import CommentList from "../comment/commentList";
export default ({ post }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <CommentList postId={post?.id} />
                <CreateComment postId={post?.id} />
            </div>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import Comment from './commetn'
import axios from "axios";

export default ({ postId }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response?.data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    console.log(comments, "comments")
    const commentMapping = comments?.map((comment) => {
        return (
            <div key={comment?.id}>
                <Comment comment={comment} />
            </div>
        )
    })

    return (
        <ul>
            {commentMapping}
        </ul>
    )
}
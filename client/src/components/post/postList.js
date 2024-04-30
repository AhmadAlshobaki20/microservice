import React, { useEffect, useState } from "react";
import Post from './post'
import axios from "axios";

export default () => {

    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts');
        setPosts(Object.values(response.data));
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    console.log(posts, "posts")
    const postsMapping = posts?.map((post) => {
        return (
            <div key={post?.id}>
                <Post post={post} />
            </div>
        )
    })

    return (
        <div className="d-flex flex-row justify-content-between">
            {postsMapping}
        </div>
    )
}
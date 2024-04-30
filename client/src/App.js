import React, { useState } from "react";
import PostList from "./components/post/postList";
import CreatePost from "./components/post/createPost";
import axios from 'axios';
export default () => {






    return <div className="container">
        <CreatePost />
        <PostList />
    </div>
}
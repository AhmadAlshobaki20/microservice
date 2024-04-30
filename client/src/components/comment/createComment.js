import React, { useState } from "react";
import axios from 'axios'
export default ({ postId }) => {
    const [content, setContent] = useState();

    const handleOnChange = (event) => {
        setContent(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content: content });
        setContent('');
    }

    return (
        <div className="container">
            <form className="form-group" >
                <div className="">
                    <label>Title</label>
                    <input value={content} onChange={handleOnChange} placeholder="enter your post" className="form-control" />
                </div>
                <button onClick={onSubmit} className='btn btn-primary'>create comment</button>
            </form>
        </div>
    )
}
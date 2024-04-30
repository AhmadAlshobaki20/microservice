import React, { useState } from "react";
import axios from 'axios'
export default () => {
    const [title, setTitle] = useState();

    const handleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', { title: title });
        setTitle('');
    }

    return (
        <div className="container">
            <h1>Create Post</h1>
            <form className="form-group" >
                <div className="">
                    <label>Title</label>
                    <input value={title} onChange={handleOnChange} placeholder="enter your post" className="form-control" />
                </div>
                <button onClick={onSubmit} className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
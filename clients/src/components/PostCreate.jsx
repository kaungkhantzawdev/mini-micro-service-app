import React, { useState } from "react";
import { ApiService } from "../config/api";
import { POST_API } from "../config/constants";

const PostCreate = () => {
    const apiService = new ApiService(POST_API.URL)
    const [data, setData] = useState({
        title: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await apiService.axiosInstance.post('/posts', data )
        console.log('data', res)
    }

    return (
        <div className="text-start mb-4">
            <h3 className='mb-3'>Create post</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">write something</label>
                        <textarea className="form-control" 
                                onChange={e => data.title = e.target.value }
                                id="exampleInputEmail1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )
}

export default PostCreate
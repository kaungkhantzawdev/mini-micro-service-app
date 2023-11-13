import React, { useState } from "react";
import { ApiService } from "../config/api";
import { COMMENT_API } from "../config/constants";

const CommentCreate = ({ postId }) => {
    const apiService = new ApiService(COMMENT_API.URL);
    const [content, setContent] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await apiService.axiosInstance.post(`/posts/${postId}/comments`, { content });

        console.log('res', res)
    }


    return (
        <div className="text-start mb-4">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">write something</label>
                        <textarea className="form-control" 
                                placeholder="comment"
                                onChange={e => setContent(e.target.value)}
                                id="exampleInputEmail1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CommentCreate
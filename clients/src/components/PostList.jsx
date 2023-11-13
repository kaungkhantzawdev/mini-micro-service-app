import React, { useEffect, useState } from "react";
import { ApiService } from "../config/api";
import { QUERY_API } from "../config/constants";
import CommentCreate from './CommentCreate';
import CommentList from "./CommentList";

const PostList = () => {
    const apiService = new ApiService(QUERY_API.URL);
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const res = await apiService.axiosInstance.get('/posts');
        console.log('data', Object.values(res.data));
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="text-start d-flex align-items-center flex-wrap">
            {
                Object.values(posts).map((obj, i) => (
                    <div key={i} className="card me-3 mb-3" style={{ width: '18rem' }}>
                        <div className="card-body p-1">
                            <h5 className="card-title">{obj.id}</h5>
                            <h4 className="card-text">{obj.title}</h4>
                            
                            {/* comment create  */}
                            <CommentCreate postId={obj.id} />

                            {/* comments  */}
                            <CommentList comments={obj.comments} />
                        </div>
                    </div>
                ))
            }        
        </div>
    )
}

export default PostList;
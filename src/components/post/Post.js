import React from 'react'
import "./post.css"
export default function Post() {
    return (
        <div className="post">
             <img
                className="postImg"
                src="img.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCatMusic">Music</span>
                    <span className="postCatLife">Life</span>
                </div>
                <div className="postTitle_Data">
                    <span className="postTitle">Post Title</span>
                    <span className="postData">1 hour age</span>
                </div>
                <p className="postDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
        </div>
    )
}

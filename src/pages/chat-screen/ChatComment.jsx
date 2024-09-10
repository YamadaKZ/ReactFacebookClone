import React from "react";
import "./ChatComment.scss";
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Comment = ({ userInfo }) => {
    return (
        <div className="comment">
            <div className="comment-content">
                <div className="header">
                    <div className="icon">
                        <img src={userInfo.icon} alt="User Icon" />
                    </div>
                    <div className="username">
                        <h2>{userInfo.username}</h2>
                    </div>
                </div>
                <div className="text">{userInfo.userText}</div>
                <div className="stats">
                    <span><StarIcon /> {userInfo.favorite}</span>
                    <span><ThumbUpIcon /> {userInfo.good}</span>
                    <span><ChatBubbleOutlineIcon /> {userInfo.comment}</span>
                </div>
            </div>
            {userInfo.picture && (
                <div className="picture">
                    <img src={userInfo.picture} alt="User Picture" />
                </div>
            )}
        </div>
    );
};

export default Comment;



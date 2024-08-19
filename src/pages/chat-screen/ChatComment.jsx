// import React from "react";
// import "./ChatComment.scss";
// import StarIcon from '@mui/icons-material/Star';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// const Comment = ({ userInfo }) => {
//     return (
//         <div className="comment-container">
//             <div className="user-info">
//                 <img src={userInfo.icon} alt="User Icon" className="user-icon" />
//                 <div className="username">{userInfo.username}</div>
//             </div>
//             <div className="user-text">{userInfo.userText}</div>
//             <div className="interaction-icons">
//                 <span><StarIcon /> {userInfo.favorite}</span>
//                 <span><ThumbUpIcon /> {userInfo.good}</span>
//                 <span><ChatBubbleOutlineIcon /> {userInfo.comment}</span>
//             </div>
//             {userInfo.picture && <img src={userInfo.picture} alt="User Picture" className="user-picture" />}
//         </div>
//     );
// };

// export default Comment;

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






// import React from "react";
// import "./ChatComment.scss";
// import StarIcon from '@mui/icons-material/Star';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import { USER_INFO_1 , USER_INFO_2, USER_INFO_3  } from "../../utils/constant";

// const Comment = ( ) => {
//     return (
//         <div className="comment">
//             <div className="comment-content">
//                 <div className="header">
//                     <div className="icon">
//                         <img src= {USER_INFO_1.icon} alt="Icon Logo" />
//                     </div>
//                     <div className="username">
//                         <h2> {USER_INFO_1.username}</h2>
//                     </div>
//                 </div>
//                 <div className="text">
//                     <p>{USER_INFO_1.userText}</p>
//                 </div>
//                 <div className="stats">
//                     <span><StarIcon fontSize="small" /> { USER_INFO_1.favorite}</span>
//                     <span><ThumbUpIcon fontSize="small" /> { USER_INFO_1.good}</span>
//                     <span><ChatBubbleOutlineIcon fontSize="small" /> { USER_INFO_1.comment}</span>
//                 </div>
//             </div>
//             <div className="picture">
//                 <img src={USER_INFO_1.picture} alt="Picture" />
//             </div>
//         </div>
//     )
// }
// export default Comment;




// import React from "react";
// import "./ChatComment.scss"

// const Comment = () => {
//     return (
//         <div className="comment">
//             <div className="icon">
//                 <img src="Robot.png" alt="Icon Logo" />
//             </div>
//             <div className="username">
//                 <h2>UserName</h2>
//             </div>
//             <div className="text">
//                 <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
//             </div>
//             <div className="picture">
//             <img src="poster.png" alt="Picture" />
//             </div>
//         </div>
//     )
// }

// export default Comment;
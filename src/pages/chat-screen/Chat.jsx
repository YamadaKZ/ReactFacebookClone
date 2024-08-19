import React, { useState, useEffect } from "react";
import "./Chat.scss";
import MainLayout from "../MainLayout";
import Comment from "./ChatComment";
import api from "../../API/api";
import mock from "../../API/display";

const Chat = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <MainLayout>
            <div className="chat">
                <h1>Facebook</h1>
                <div className="container">
                    <div className="display">
                        {users.map((user, index) => (
                            <Comment key={index} userInfo={user} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Chat;


// import React from "react";
// import "./Chat.scss";
// import MainLayout from "../MainLayout";
// import Comment from "./ChatComment";

// const Chat = () => {
//     return (
//         <MainLayout>
//             <div className="chat">
//                 <h1>Facebook</h1>
//                 <div className="chat-container">
//                     <div className="display">
//                         <Comment  />                
//                         <Comment />                
//                         <Comment />                
//                     </div>
//                 </div>
//             </div>
//         </MainLayout>
//     );
// }

// export default Chat;


// import "./Chat.scss"
// import MainLayout from "../MainLayout";
// import Comment from "./ChatComment";

// const Chat = () => {


//     return (
//         <MainLayout>
//             <div className="chat">
//                 <h1>Facebook</h1>
//                 <div className="display">
//                     <Comment />                
//                     <Comment />                
//                 </div>

//             </div>
//         </MainLayout>
//     );
// }


// export default Chat

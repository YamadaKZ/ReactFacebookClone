import React, {useEffect } from "react";
import "./Chat.scss";
import MainLayout from "../MainLayout";
import Comment from "./ChatComment";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../slices/usersSlice";


const Chat = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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

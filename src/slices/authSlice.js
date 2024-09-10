import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || null,
    userInfo: {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    },
};

    const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    loginSuccess(state, action) {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
        state.token = null;
        localStorage.removeItem('token');
    },
    setUserInfo(state, action) {
        state.userInfo = action.payload;
    },
    },
});

export const { loginSuccess, logout, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
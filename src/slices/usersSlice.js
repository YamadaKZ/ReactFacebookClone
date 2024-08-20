import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/api";
// This import is needed to set up API mocks
import mock from "../API/display";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await api.get("/users");
    return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;

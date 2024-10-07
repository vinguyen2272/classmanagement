import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_GET_USER_LIST = 'https://65214b1ba4199548356d04c5.mockapi.io/teacher';
export const fetchUserListData = createAsyncThunk('data/fetchUserList', async () => {
    try {
        const response = await axios.get(URL_GET_USER_LIST);
        return await response.data;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
});
export const addUserList = createAsyncThunk('data/addUserList', async (data) => {
    try {
        const response = await axios.post(URL_GET_USER_LIST, data);
        return response.data;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
});
export const updateUserList = createAsyncThunk('data/updateUserList', async (data) => {
    try {
        const response = await axios.put(`${URL_GET_USER_LIST}/${data.id}`, data);
        return response.data;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
});
export const UserListSlice = createSlice({
    name: 'userList',
    initialState: {
        userList: [],
        searchUsers: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setSearchUsers: (state, action) => {
            if (!state.searchUsers.includes(action.payload)) {
                state.searchUsers.push(action.payload);
            }
        },
        removeSearchUsers: (state, action) => {
            const index = state.searchUsers.indexOf(action.payload);
            if (index > -1) {
                state.searchUsers.splice(index, 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserListData.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchUserListData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userList = action.payload;
        })
            .addCase(fetchUserListData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error?.message ?? null;
        })
            .addCase(addUserList.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(addUserList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userList = [...state.userList, action.payload];
        })
            .addCase(addUserList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error?.message ?? null;
        })
            .addCase(updateUserList.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(updateUserList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userList = state.userList.map(user => user.id === action.payload.id ? action.payload : user);
            // const toast = (action.meta.arg as UpdateToast).toast;
            // if(toast?.current){
            //     toast.current.show({
            //         severity: 'success',
            //         summary: 'Update success',
            //         detail: 'User has been updated successfully',
            //         life: 3000
            //     })
            // }
        })
            .addCase(updateUserList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error?.message ?? null;
        });
    }
});
export const { setSearchUsers, removeSearchUsers } = UserListSlice.actions;
export default UserListSlice.reducer;

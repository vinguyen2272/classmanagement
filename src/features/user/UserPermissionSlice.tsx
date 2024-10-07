import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Permission {
    syllabus: string;
    training: string;
    class: string;
    learningMaterial: string;
    user: string;
}

interface RoleControl {
    id: string;
    role: string;
    permission: Permission;
}

interface UserPermissionState {
    permissions: RoleControl[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const URL_GET_USER_PERMISSIONS: string = 'https://6698b84c2069c438cd6faaf9.mockapi.io/api/v1/roles';

export const fetchData = createAsyncThunk('data/fetch', async () => {
    try {
        const response = await axios.get(URL_GET_USER_PERMISSIONS);
        return await response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
});

export const updatePermissions = createAsyncThunk('data/update', async (updateData: RoleControl[], { rejectWithValue }) => {
    try {
        const responses = await Promise.all(updateData.map(item =>
            axios.put(`${URL_GET_USER_PERMISSIONS}/${item.id}`, item)
        ));
        return responses.map(res => res.data);
    } catch (error: any) {
        console.error('Error:', error);
        return rejectWithValue(error.response?.data ?? error.message);
    }
});

export const UserPermissionSlice = createSlice({
    name: 'userPermissions',
    initialState: {
        permissions: [],
        status: 'idle',
        error: null as string | null
    } as UserPermissionState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.permissions = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message ?? null;
            })
            .addCase(updatePermissions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePermissions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.permissions = action.payload;
            })
            .addCase(updatePermissions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const userPermissionsAction = UserPermissionSlice.actions;
export default UserPermissionSlice.reducer;

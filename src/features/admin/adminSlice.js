import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import axiosAPI from '../../axios/axiosAPI';
export const getAdmin = createAsyncThunk('admin/getAdmin', async (_, thunkAPI) => {
    try {
        const res = await axiosAPI.get('/adminList');
        const data = res.data;
        return data;
    }
    catch {
        return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
});
export const initialState = {
    adminState: [],
};
export const adminSlice = createAppSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAdmin.fulfilled, (state, action) => {
            state.adminState = action.payload;
        });
    },
});
export default adminSlice.reducer;
export const selectAdmin = (state) => state.admin.adminState;

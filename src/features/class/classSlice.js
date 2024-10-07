import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import axiosAPI from '../../axios/axiosAPI';
export const getClasses = createAsyncThunk('class/getClasses', async (_, thunkAPI) => {
    try {
        const res = await axiosAPI.get('/class');
        const data = res.data;
        return data;
    }
    catch {
        return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
});
export const getClassById = createAsyncThunk('class/getClassById', async (id, thunkAPI) => {
    try {
        const res = await axiosAPI.get(`/class/${id}`);
        const data = res.data;
        return data;
    }
    catch {
        return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
});
export const initialState = {
    classes: [],
    searchValue: [],
    classFilter: [],
    class: {},
};
export const classSlice = createAppSlice({
    name: 'class',
    initialState,
    reducers: {
        duplicateClass: (state, action) => {
            state.classes = [...state.classes, action.payload];
        },
        deleteClass: (state, action) => {
            state.classes = state.classes.filter(item => item.classId !== action.payload);
        },
        searchClassTag: (state, action) => {
            state.searchValue.push(action.payload);
        },
        deleteSearchClassTag: (state, action) => {
            state.searchValue = state.searchValue.filter(item => item !== action.payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getClasses.fulfilled, (state, action) => {
            state.classes = action.payload;
        })
            .addCase(getClassById.fulfilled, (state, action) => {
            state.class = action.payload;
        });
    },
});
export const { duplicateClass, deleteClass, searchClassTag, deleteSearchClassTag, } = classSlice.actions;
export default classSlice.reducer;

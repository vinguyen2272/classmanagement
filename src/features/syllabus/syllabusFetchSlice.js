import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import axiosAPI from '../../axios/axiosAPI';
export const getSyllabuses = createAsyncThunk('syllabus/getSyllabuses', async (_, thunkAPI) => {
    try {
        const res = await axiosAPI.get('/syllabus');
        const data = res.data;
        return data;
    }
    catch {
        return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
});
export const getSyllabusById = createAsyncThunk('syllabus/getSyllabusById', async (id, thunkAPI) => {
    try {
        const res = await axiosAPI.get(`/syllabus/${id}`);
        const data = res.data;
        return data;
    }
    catch {
        return thunkAPI.rejectWithValue('Failed to fetch issues.');
    }
});
export const initialState = {
    syllabuses: [],
};
export const syllabusFetchSlice = createAppSlice({
    name: 'syllabus',
    initialState,
    reducers: {
        duplicateSyllabus: (state, action) => {
            state.syllabuses = [action.payload, ...state.syllabuses];
        },
        deleteSyllabus: (state, action) => {
            state.syllabuses = state.syllabuses.filter(item => item.syllabusId !== action.payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(getSyllabuses.fulfilled, (state, action) => {
            state.syllabuses = action.payload;
        });
        builder.addCase(getSyllabusById.fulfilled, (state, action) => {
            const syllabusIndex = state.syllabuses.findIndex(s => s.syllabusId === action.payload.syllabusId);
            if (syllabusIndex !== -1) {
                state.syllabuses[syllabusIndex] = action.payload;
            }
            else {
                state.syllabuses.push(action.payload);
            }
        });
    },
});
// export const selectSyllabusById = (state: RootState, id: string) =>
//   state.syllabus.syllabuses.find(syllabus => syllabus.syllabusId === id)
export const { deleteSyllabus, duplicateSyllabus } = syllabusFetchSlice.actions;
export default syllabusFetchSlice.reducer;

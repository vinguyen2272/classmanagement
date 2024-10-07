import { createAppSlice } from '../../app/createAppSlice';
const initialState = {
    createStage: 'general',
};
export const syllabusCreateSlice = createAppSlice({
    name: 'syllabusCreate',
    initialState,
    reducers: {
        setCreateStage: (state, action) => {
            state.createStage = action.payload;
        },
    },
    selectors: {
        selectCreateStage: syllabusCreate => syllabusCreate.createStage,
    },
});
export const { setCreateStage } = syllabusCreateSlice.actions;
export const { selectCreateStage } = syllabusCreateSlice.selectors;

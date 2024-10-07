import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'
import type { ProgressBarProps } from '../../components/ProgressBar/ProgressBar'

export interface syllabusCreateSliceType {
  createStage: ProgressBarProps['stage']
}

const initialState: syllabusCreateSliceType = {
  createStage: 'general',
}

export const syllabusCreateSlice = createAppSlice({
  name: 'syllabusCreate',
  initialState,
  reducers: {
    setCreateStage: (
      state,
      action: PayloadAction<ProgressBarProps['stage']>
    ) => {
      state.createStage = action.payload
    },
  },
  selectors: {
    selectCreateStage: syllabusCreate => syllabusCreate.createStage,
  },
})

export const { setCreateStage } = syllabusCreateSlice.actions

export const { selectCreateStage } = syllabusCreateSlice.selectors

import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'
import axiosAPI from '../../axios/axiosAPI'
import type { Admin } from '../../context/Interface/Admin'
import type { RootState } from '../../app/store'

export const getAdmin = createAsyncThunk(
  'admin/getAdmin',
  async (_, thunkAPI) => {
    try {
      const res = await axiosAPI.get('/adminList')
      const data = res.data
      return data
    } catch {
      return thunkAPI.rejectWithValue('Failed to fetch issues.')
    }
  }
)

interface AdminState {
  adminState: Admin[]
}
export const initialState: AdminState = {
  adminState: [],
}

export const adminSlice = createAppSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAdmin.fulfilled, (state, action) => {
      state.adminState = action.payload
    })
  },
})

export default adminSlice.reducer


export const selectAdmin = (state:RootState) => state.admin.adminState

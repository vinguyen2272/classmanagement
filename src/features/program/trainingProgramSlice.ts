import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'
import type { CourseModel } from '../../context/Interface/CourseModel'
import type { RootState } from '../../app/store'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosAPI from '../../axios/axiosAPI'
import type { CourseSchedule } from '../../context/Interface/CourseSchedule'

export interface TrainingProgramInitialState {
  loading: boolean
  programs: CourseModel[] | undefined
  inputSearch: string[]
  detailProgram: CourseModel | undefined

  courseSchedule: CourseSchedule[]
  trainingCreateStep: 'create training program' | 'add syllabus'
}

function getAllProgramsApi() {
  return axiosAPI.get('/courses')
}

function deleteProgramsApi(body: string) {
  const requestConfig: AxiosRequestConfig<any> = {
    method: 'delete',
    url: `/courses/${body}`,
    data: body,
  }
  return axiosAPI.request(requestConfig)
}

function duplicateProgramsApi(body: CourseModel) {
  const requestConfig: AxiosRequestConfig<any> = {
    method: 'post',
    url: `/courses`,
    data: body,
  }
  return axiosAPI.request(requestConfig)
}
function getDetailProgramsApi(id: string) {
  const requestConfig: AxiosRequestConfig<any> = {
    method: 'get',
    url: `/courses/${id}`,
  }
  return axiosAPI.request(requestConfig)
}

function getCourseSchedule(id: string) {
  const requestConfig: AxiosRequestConfig<any> = {
    method: 'get',
    url: `/courses/${id}/courseSchedule`,
  }
  return axiosAPI.request(requestConfig)
}

const name = 'trainingProgram'

const initialState: TrainingProgramInitialState = {
  programs: [],
  loading: false,
  inputSearch: [],
  detailProgram: undefined,
  courseSchedule: [],
  trainingCreateStep: 'create training program',
}

export const getAllPrograms = createAsyncThunk(
  `${name}/getAllProgram`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<CourseModel[]> = await getAllProgramsApi()
      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const deletePrograms = createAsyncThunk(
  `${name}/deleteProgram`,
  async (body: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<CourseModel> = await deleteProgramsApi(body)

      return response
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const duplicatePrograms = createAsyncThunk(
  `${name}/duplicateProgram`,
  async (body: CourseModel, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<CourseModel> =
        await duplicateProgramsApi(body)
      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const getDetailPrograms = createAsyncThunk(
  `${name}/getDetailProgram`,
  async (id: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<CourseModel> =
        await getDetailProgramsApi(id)
      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const getCourseScheduleThunk = createAsyncThunk(
  `${name}/getCourseSchedule`,
  async (id: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<any> = await getCourseSchedule(id)
      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const programSlice = createAppSlice({
  name,
  initialState,
  reducers: {
    addInputSearch: (state, { payload }) => {
      state.inputSearch = [...state.inputSearch, payload]
    },

    deleteInputSearch: (state, { payload }) => {
      console.log(payload)
      const index = state.inputSearch.indexOf(payload)
      if (index > -1) {
        state.inputSearch.splice(index, 1)
      }
    },

    deleteProgram: (state, { payload }) => {
      state.programs = state.programs!.filter(item => item.courseId !== payload)
    },

    duplicateProgram: (state, { payload }) => {
      state.programs!.push(payload)
    },

    setSelectProgramStep: (state, action) => {
      state.trainingCreateStep = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(getAllPrograms.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getAllPrograms.fulfilled, (state, action) => {
      state.loading = false
      state.programs = action.payload
    })
    builder.addCase(getAllPrograms.rejected, (state, action) => {
      state.loading = false
      console.error('Error fetching programs:', action.error)
    })

    // Delete program
    builder.addCase(deletePrograms.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deletePrograms.fulfilled, (state, action) => {
      state.loading = false
    })
    builder.addCase(deletePrograms.rejected, (state, action) => {
      state.loading = false
    })

    // Duplicate program
    builder.addCase(duplicatePrograms.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(duplicatePrograms.fulfilled, (state, action) => {
      state.loading = false
      // state.programs!.push(action.payload)
    })
    builder.addCase(duplicatePrograms.rejected, (state, action) => {
      state.loading = false
      console.error('Error duplicating programs:', action.error)
    })

    // Get detail program
    builder.addCase(getDetailPrograms.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getDetailPrograms.fulfilled, (state, action) => {
      state.loading = false
      state.detailProgram = action.payload
    })
    builder.addCase(getDetailPrograms.rejected, (state, action) => {
      state.loading = false
      console.error('Error fetching detail program:', action.error)
    })

    //get course schedules
    builder.addCase(getCourseScheduleThunk.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getCourseScheduleThunk.fulfilled, (state, action) => {
      state.loading = false
      state.courseSchedule = action.payload
    })
    builder.addCase(getCourseScheduleThunk.rejected, (state, action) => {
      state.loading = false
      console.error('Error fetching course schedule:', action.error)
    })
  },
})

export const { reducer: programReducer, actions: programActions } = programSlice

export const selectProgram = (state: RootState) =>
  state.trainingProgram.programs
export const selectLoading = (state: RootState) => state.trainingProgram.loading
export const selectInputSearch = (state: RootState) =>
  state.trainingProgram.inputSearch
export const selectDetailProgram = (state: RootState) =>
  state.trainingProgram.detailProgram

export const selectCourseSchedule = (state: RootState) =>
  state.trainingProgram.courseSchedule

export const selectProgramStep = (state: RootState) =>
  state.trainingProgram.trainingCreateStep

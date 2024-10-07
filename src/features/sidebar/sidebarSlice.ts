import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'

export interface SidebarSliceState {
  collapsed: boolean
}

const initialState: SidebarSliceState = {
  collapsed: false,
}

export const sidebarSlice = createAppSlice({
  name: 'sidebar',
  initialState,
  reducers: create => ({
    toggleSidebar: state => {
      state.collapsed = !state.collapsed
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload
    },
  }),
  selectors : {
    selectCollapsed: sidebar => sidebar.collapsed,
  }
})

export const {toggleSidebar} = sidebarSlice.actions

export const { selectCollapsed} = sidebarSlice.selectors

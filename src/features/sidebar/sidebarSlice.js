import { createAppSlice } from '../../app/createAppSlice';
const initialState = {
    collapsed: false,
};
export const sidebarSlice = createAppSlice({
    name: 'sidebar',
    initialState,
    reducers: create => ({
        toggleSidebar: state => {
            state.collapsed = !state.collapsed;
        },
        setSidebarCollapsed: (state, action) => {
            state.collapsed = action.payload;
        },
    }),
    selectors: {
        selectCollapsed: sidebar => sidebar.collapsed,
    }
});
export const { toggleSidebar } = sidebarSlice.actions;
export const { selectCollapsed } = sidebarSlice.selectors;

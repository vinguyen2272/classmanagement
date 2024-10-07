import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { counterSlice } from '../features/counter/counterSlice';
import { quotesApiSlice } from '../features/quotes/quotesApiSlice';
import { sidebarSlice } from '../features/sidebar/sidebarSlice';
import { syllabusCreateSlice } from '../features/syllabus/syllabusCreateSlice';
import { syllabusFetchSlice } from '../features/syllabus/syllabusFetchSlice';
import { classSlice } from '../features/class/classSlice';
import { programSlice } from '../features/program/trainingProgramSlice';
import { UserPermissionSlice } from "../features/user/UserPermissionSlice";
import { adminSlice } from '../features/admin/adminSlice';
import { UserListSlice } from '../features/user/UserListSlice';
// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(counterSlice, quotesApiSlice, sidebarSlice, syllabusCreateSlice, syllabusFetchSlice, classSlice, programSlice, UserPermissionSlice, adminSlice, UserListSlice);
// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware().concat(quotesApiSlice.middleware);
        },
        preloadedState,
    });
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
    setupListeners(store.dispatch);
    return store;
};
export const store = makeStore();

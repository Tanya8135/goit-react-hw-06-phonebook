// import { createSlice } from "@reduxjs/toolkit";
// import { statusFilter } from "./constants";

// const filtersInitialState = {
//     status: statusFilter.name,
// };

// const filterSlice = createSlice({
//     name: "filters",
//     initialState: filtersInitialState,
//     reducers: {
//         setStatusFilter(state, action) {
//             state.status = action.payload;
//         }
//     }
// })

// export const { setStatusFilter } = filterSlice.actions;
// export const filtersReducer = filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filters",
    initialState: '',

    reducers: {
        setStatusFilter: (state, action) => action.payload,
    },
})

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
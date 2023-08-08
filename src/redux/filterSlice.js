import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filters",
    initialState: "",

    reducers: {
        setStatusFilter: (state, action) => action.payload,
    },
})

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
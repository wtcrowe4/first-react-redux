import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: { items: [] },
    reducers: {
        addItem: (state, action) => {
            return {items: [...state.items, action.payload]}},
        removeItem: (state, action) => {
            let todos = [...state.items]
            let index = action.payload
            todos.splice(index, 1)
            return { items: todos }
        },
        // toggleItem: (state, action) => {
        //     let todos = [...state.items]
        //     let index = action.payload
        //     todos[index].completed = !todos[index].completed
        //     return { items: todos }
        // },
        
        //state.items[action.payload].completed = !state.items[action.payload].completed,
        clearAll: (state) => {return {items: []}},
    }
});

export const { addItem, removeItem, toggleItem, clearAll } = todoSlice.actions;
export default todoSlice.reducer;
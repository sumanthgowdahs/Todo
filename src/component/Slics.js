import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    todoList: [],
    todoListTotal: 0,
    deletedItems: []
}
let todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodoItem: (cState, action) => {
            cState.todoList.push(action.payload);
            cState.todoListTotal = cState.todoList.length
        },
        deleteTodoItems: (cState, action) => {
            let { payload: deleteId } = action
            let updatedItems = cState.todoList.filter((item, index) => {

                return index !== deleteId
            })
            cState.todoList = updatedItems
            cState.todoListTotal = cState.todoList.length
        },
        deleteAllItems: (cState, action) => {
            let { payload: todoItems } = action;
            cState.deletedItems = [...cState.deletedItems, ...todoItems]
            cState.todoList = []
        },
        storeDeletedItems: (cState, action) => {
            let { payload: deleteId } = action
            let updateDeleteItems = cState.todoList.find((item, index) => {
                return index == deleteId
            })
            cState.deletedItems.push(updateDeleteItems)

        },
        recycleRemove: (cState, action) => {
            let { payload: deleteId } = action
            let updatedRecycleItems = cState.deletedItems.filter((item, index) => {
                return index !== deleteId
            })
            cState.deletedItems = updatedRecycleItems

        },
        recycleRestore: (cState, action) => {
            let { payload: restoreId } = action
            cState.todoList.push(restoreId.item)
            let updatedItems = cState.deletedItems.filter((items, index) => {
                return index !== restoreId.index
            })
            cState.deletedItems = updatedItems
        },
        recycleClearAll: (cState, action) => {
            cState.deletedItems = []
        },
        recycleRestoreAll: (cstate, action) => {
            cstate.todoList = [...action.payload.deletedItems , action.payload.todoList]
            cstate.deletedItems = []
        }
    }
})
export let { addTodoItem, deleteTodoItems, deleteAllItems, storeDeletedItems, recycleRemove, recycleRestore, recycleClearAll, recycleRestoreAll } = todoSlice.actions;
export default todoSlice.reducer

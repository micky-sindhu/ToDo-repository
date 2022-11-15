import * as types from './actionType';

const initialState = {
    todos: [],
    editValue : ''
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_TODO:
            let test =  [...state.todos,action.payload]
        return {
            ...state,
            todos: [action.payload,...state.todos]
        }
        case types.DELETE_TODO:
            let filterArray = state.todos.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                todos: filterArray
            }
        case types.EDIT_TODO:
            let editFilter = state.todos.filter((item) => item.id === action.payload.id)
            return {
                ...state
            }
        default:
            return state
    }
}
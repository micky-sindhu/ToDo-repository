import * as types from './actionType';

export const createTodo = (todo) => ({
    type: types.CREATE_TODO,
    payload: todo
})

export const deleteToDo = (deltodo) => ({
    type: types.DELETE_TODO,
    payload: deltodo
})

export const editToDo = (edittodo) => ({
    type: types.EDIT_TODO,
    payload: edittodo
})
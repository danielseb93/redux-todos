import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.model';
import { _todoReducer } from './todos/todo.reducers';
import { filtroReducer } from './filtro/filtro.reducer';
export interface AppState{
    todos: Todo[],
    filter: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: _todoReducer,
    filter: filtroReducer
}
import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

export const _filtroReducer = createReducer<filtrosValidos>(
    initialState,
    on(setFiltro, ( state, { filtro }) => filtro),
);

export function filtroReducer(state: filtrosValidos | undefined, action: Action){
    return _filtroReducer(state, action);
}
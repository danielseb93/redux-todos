import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

//Iniciador de estado
export const initialState: Todo[] = [
  new Todo('Sergio,, lavar la losa'),
  new Todo('CSergio, sacar la basura'),
  new Todo('Revisión App')
];

export const _todoReducer = createReducer(
  initialState,
  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
  on(crear, (state, { text }) => [...state, new Todo( text )]),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if( todo.id === id){
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, text }) => {
    return state.map( todo => {
      if( todo.id === id){
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completado }) => state.map( todo => {
        return {
          ...todo,
          isComplete: completado
        }
    })),
  on(limpiarCompletados, state => state.filter( todo => !todo.isComplete )
    ),
);
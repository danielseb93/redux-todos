import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{ id: number | undefined}>()    
);

export const crear = createAction(
    '[TODO] Crear todo',
    props<{ text: string }>()    
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{
        id: number | undefined,
        text: string | undefined
    }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo, cambia el check en el estado',
    props<{ id: number | undefined}>()    
);

export const toggleAll = createAction(
    '[TODO] ToggleAll, cambia todos los checks',
    props<{ completado: boolean | undefined}>()
);

export const limpiarCompletados = createAction(
    '[TODO] limpiarCompletados, elimina los todos completados',
);
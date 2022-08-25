import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos | undefined): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.isComplete);
      case 'pendientes':
        return todos.filter(todo => !todo.isComplete);
      default:
        return todos;
    }
  }

}

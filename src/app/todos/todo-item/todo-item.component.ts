import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';
import { borrar } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @ViewChild('inputFisico') txtInputFisico: ElementRef | undefined;

  check: FormControl = new FormControl;
  txtInput: FormControl = new FormControl;

  isEdit : boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.check = new FormControl( this.todo?.isComplete );
    this.txtInput = new FormControl ( this.todo?.text, Validators.required );

    this.check.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo?.id }) );
    });
  }

  borrar(){
    this.store.dispatch( actions.borrar({ id: this.todo?.id }))
  }

  editar(){
    this.isEdit = true;
    this.txtInput.setValue( this.todo?.text );
    setTimeout(()=>{ //Se coloca este timeOut porque los elementos se generan después de aplicar la propiedad select
      this.txtInputFisico?.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.isEdit = false;

    if( this.txtInput.invalid ){ return; }
    if( this.txtInput.value === this.todo?.text ){ return; }
    this.store.dispatch(
      actions.editar({
        id: this.todo?.id,
        text: this.txtInput.value
      })
    );
  }
}

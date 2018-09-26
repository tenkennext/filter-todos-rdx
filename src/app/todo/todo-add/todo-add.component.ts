import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.txtInput =  new FormControl('', Validators.required);
  }

  agregarTodo() {
    if ( this.txtInput.invalid ) {
        return;
    }
    const accion = new fromTodo.AgregarTodoAction( this.txtInput.value );
    this.store.dispatch( accion );
    /*console.log( this.txtInput.value );
    console.log( this.txtInput.value );*/
    this.txtInput.setValue('');
  }
}

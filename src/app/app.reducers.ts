import { Todo } from './todo/model/todo.model';
/**redux*/
import { ActionReducerMap } from '../../node_modules/@ngrx/store';
/*reducers*/
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}
export const APP_REDUCERS: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer,
};

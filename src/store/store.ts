import { todosReducers } from './reducers';
import { Store, combineReducers, createStore } from 'redux';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface AppState {
  todos: Todo[];
}

type ActionType = 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO';

export interface Action {
  type: ActionType;
  payload: string;
}

const rootReducer = combineReducers({
  todos: todosReducers,
});

export const store: Store<AppState, Action> = createStore(rootReducer);

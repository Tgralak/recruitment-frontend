import { mockTodos } from './mockData';
import { Action } from './store';

const INITIAL_STATE = mockTodos;

export const todosReducers = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state];
    case 'REMOVE_TODO':
      return [...state.filter(({ id }) => id !== action.payload)];
    case 'TOGGLE_TODO':
      const toggledItem = state.find(({ id }) => id === action.payload);
      const updatedToggledItem = { ...toggledItem, isCompleted: !toggledItem?.isCompleted };

      if (updatedToggledItem?.isCompleted) {
        return [...state.filter(({ id }) => id !== updatedToggledItem.id), updatedToggledItem];
      }

      return [updatedToggledItem, ...state.filter(({ id }) => id !== toggledItem?.id)];
    default:
      return state;
  }
};

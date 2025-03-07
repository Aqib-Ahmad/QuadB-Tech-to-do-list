import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE_TASK } from './actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, { ...action.payload, id: Date.now(), completed: false }] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task),
      };
    case TOGGLE_COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task),
      };
    default:
      return state;
  }
};

export default taskReducer;

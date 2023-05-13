import { configureStore, createReducer } from '@reduxjs/toolkit';

const exampleReducer = createReducer([], () => {
  /**
   * Example from official RTK documentation
   * @url https://redux-toolkit.js.org/usage/usage-guide#store-setup
   *
   * builder.addCase('ADD_TODO', (state, action) => {
   *   // "mutate" the array by calling push()
   *   state.push(action.payload)
   * })
   */
});

export const store = configureStore({
  reducer: {
    /* your reducers placed here */
    default: exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

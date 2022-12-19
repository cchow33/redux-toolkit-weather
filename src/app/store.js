// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//   },
// });

// Connect api slice to redux store and register apiSlice using setupListeners and configureStore modules
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../apiCalls/apiSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
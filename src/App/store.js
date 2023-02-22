import { configureStore } from '@reduxjs/toolkit';
import toolsReducer from '../features/tools/toolsSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    tools: toolsReducer,
  },
});

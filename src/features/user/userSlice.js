/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'jojoLesBiscotos',
  avatar: 'https://i.pinimg.com/originals/97/00/74/9700742a4a213d0f181f7d31fcd63caf.jpg',
  lastname: 'Kujo',
  firstname: 'Jotaro',
  website: 'https://jjba.fandom.com/fr/wiki/Jotaro_Kujo',
  description:
    'Jotaro is introduced as a rough delinquent, but he has a gentle heart, and is loyal to those he likes.',
  email: 'kujo.jotaro@stardust.com',
  tools: [1, 3],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserInformations: (state, action) => {
      state = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setToolsUser: (state, action) => {
      state.tools = action.payload;
    },
    removeToolsUser: (state, action) => {
      state.tools = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUsername,
  setToolsUser,
  removeToolsUser,
  setLastname,
  setFirstname,
  setWebsite,
  setEmail,
  setDescription,
  setUserInformations,
} = userSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
export const gamemasterSlice = createSlice({
  name: 'gamemaster',
  initialState: {
    isLogin: false,
    token: '',
    email: '',
    name: '',
    profile: false,
    tournamentupdate: false,
    tournamentid: ''
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.profile = action.payload.profilepic;
      state.tournamentupdate = action.payload.CreateTournament.tournamentupdate;
      state.tournamentid = action.payload.CreateTournament.tournamentid;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.name = '';
      state.email = '';
      state.token = '';
      state.profile = '';
    },
    profileUpdation: (state) => {
      state.profile = true
    },
    CreateTournament: (state, action) => {
      state.tournamentupdate = true;
      state.tournamentid = action.id;
    },
    removeTournament: (state, action) => {
      state.tournamentupdate = false;
      state.tournamentid = '';
    }
  },
});

export const { setLogin, setLogout } = gamemasterSlice.actions;

export default gamemasterSlice.reducer;
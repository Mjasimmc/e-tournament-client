import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    isLogin: false,
    email: '',
    name: '',
    profile: false,
    team: {
      status: false,
      id: ''
    },
    games: [],
    playerId:''
  },
  reducers: {
    setLogin: (state, action) => {
      console.log(action.payload)
      state.playerId = action.payload._id
      state.isLogin = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.team = action.payload.team;
      state.profile = action.payload.profilepic
      state.games = action.payload.games;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.name = '';
      state.email = '';
      state.profile = ''
      state.team = null
    },
    teamUpdation: (state, action) => {
      state.team = action.payload
    },
    setGameList: (state, action) => {
      state.games = action.payload
    },
    updatePlayerDatainRedux: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    }
  },
});

export const { setLogin, setLogout, teamUpdation, setGameList ,updatePlayerDatainRedux} = playerSlice.actions;

export default playerSlice.reducer;

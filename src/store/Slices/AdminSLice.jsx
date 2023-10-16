import { createSlice } from '@reduxjs/toolkit';

export const AdminSLice = createSlice({
  name: 'admin',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export default AdminSLice.reducer;
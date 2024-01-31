import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  login: boolean;
  cart: boolean;
  menu: boolean;
}

const initialState: IUser = {
  login: false,
  cart: false,
  menu: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openCart: (state) => {
      state.cart = !state.cart;
    },
    openMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { openCart, openMenu } = UserSlice.actions;
export default UserSlice.reducer;

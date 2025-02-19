import { configureStore, createSlice } from "@reduxjs/toolkit";

const lemonadeSlice = createSlice({
  name: "lemonade",
  initialState: { cash: 10 },
  reducers: {
    buyLemon: (state) => {
      if (state.cash >= 2) state.cash -= 2;
    },
    sellLemonade: (state) => {
      state.cash += 3;
    },
  },
});

export const { buyLemon, sellLemonade } = lemonadeSlice.actions;

const store = configureStore({
  reducer: {
    lemonade: lemonadeSlice.reducer,
  },
});

export default store;

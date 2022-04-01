import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //action은 increment
    increment: (state) => {
      //reducer는 counter + 1
      console.log("increment!");
      state.count += 1;
    },
    decrement: (state) => {
      console.log("decrement!");
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: (state) => {
      "reset clicked!";
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;

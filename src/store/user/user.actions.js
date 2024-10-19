import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = () => {
  // Fake API call
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ id: 1, name: "Bob" });
    }, 1000)
  );
};

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (userId, thunkAPI) => {
    try {
      const res = await fetchUserById(userId);
      return res;
    } catch (er) {
      return thunkAPI.rejectWithValue(er);
    }
  }
);

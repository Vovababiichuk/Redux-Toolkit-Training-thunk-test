import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesList: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const recipe = action.payload;
      const isExist = state.recipesList.some((el) => el.id === recipe.id);

      if (isExist) {
        const index = state.recipesList.findIndex((el) => el.id === recipe.id);
        state.recipesList.splice(index, 1);
      } else {
        state.recipesList.push(recipe);
      }
    },
  },
});

// export const { actions, reducer } = favoritesSlice;

// export const { toggleFavorites } = favoritesSlice.actions;
// export default favoritesSlice.reducer;

//! with use custom hook useActions
export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;

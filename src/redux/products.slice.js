import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: []
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItemsList: (state, actions) => {
      state.itemsList = actions.payload;
    },
    deleteItem: (state, actions) => {
      const ID = actions.payload;
      const remaningItems = state.itemsList.filter((ele) => ele.id !== ID);
      state.itemsList = remaningItems;
    },
    updateItem: (state, actions) => {
      const { id, ...itemDetails } = actions.payload;
      console.log(id, itemDetails);
      const newList = state.itemsList.map((ele) =>
        ele.id === id ? { ...ele, ...itemDetails } : ele
      );
      state.itemsList = newList;
    }
  }
});

export const { setItemsList, deleteItem, updateItem } = productSlice.actions;

export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  editValue: "",
  listTODO: [],
  editMode: false,
  itemIndex: null,
};

export const methodsTODO = createSlice({
  name: "methods",
  initialState,
  reducers: {
    add: (state) => {
      if (state.inputValue.trim() === "") {
        alert("Пожалуйста, заполните поле");
      } else {
        state.listTODO.push(state.inputValue);
        state.inputValue = "";
      }
    },
    edit: (state, action) => {
      state.itemIndex = action.payload;
      state.editMode = true;
    },
    saveEdit: (state) => {
      if (state.editValue.trim() === "") {
        alert("Пожалуйста, заполните поле");
      } else {
        state.listTODO[state.itemIndex] = state.editValue;
        state.editMode = false;
        state.editValue = "";
      }
    },
    deleteTodo: (state, action) => {
      state.listTODO.splice(action.payload, 1);
    },
    addInput: (state, action) => {
      state.inputValue = action.payload;
    },
    editInput: (state, action) => {
      state.editValue = action.payload;
    },
  },
});

export const { add, edit, deleteTodo, addInput, saveEdit, editInput } =
  methodsTODO.actions;

export default methodsTODO.reducer;

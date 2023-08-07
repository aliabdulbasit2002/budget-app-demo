import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: [],
  expense: [],
  income: [],
  //other states...
};

const appSlices = createSlice({
  name: "budgetExpense",
  initialState,
  reducers: {
    addFunction: (state, action) => {
      state.budget = [...state.budget, action.payload];
      state.expense = [...state.expense, action.payload];
      state.income = [...state.income, action.payload];
    },
    updateFunction: (state, action) => {
      state.budget = state.budget.map((budget) =>
        budget.id === action.payload.id ? action.payload : budget
      );
      state.expense = state.expense.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
      state.income = state.income.map((income) =>
        income.id === action.payload.id ? action.payload : income
      );
    },
    deleteFunction: (state, action) => {
      state.budget = state.budget.filter((budget) => budget.id !== action.payload);
      console.log("budget deleted")
      state.expense = state.expense.filter((expense) => expense.id !== action.payload);
      console.log("expense deleted")
      state.income = state.income.filter((income) => income.id !== action.payload);
      console.log("income deleted")
    },
    //   other actions..
  },
});

export const { addFunction, updateFunction, deleteFunction } =
  appSlices.actions;

export default appSlices.reducer;

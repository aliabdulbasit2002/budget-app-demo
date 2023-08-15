import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  budget: [
    {
      id: nanoid(),
      name: "Groceries for June",
      amount: 200,
      finance: 0,
      startDate: "2/06/2023",
      endDate: "25/06/2023",
      description: "Toiletries, Dog food, Veges"
    },
    {
      id: nanoid(),
      name: "Budget for laundry",
      amount: 150,
      finance: 0,
      startDate: "2/06/2023",
      endDate: "25/06/2023",
      description: "Toiletries, Dog food, Veges"
    },
  ],
  expense: [],
  enabledCardId: null,
  isBudgetButtonEnabled: false,
  //other states...
};

const appSlices = createSlice({
  name: "budgetExpense",
  initialState,
  reducers: {
    enableCard: (state, action) => {
      state.enabledCardId = action.payload;
      state.isBudgetButtonEnabled = true;
    },
    clearEnabledCard: (state) => {
      state.enabledCardId = null;
      state.isBudgetButtonEnabled = false;
    },
    enableBudgetButton: (state) => {
      state.isBudgetButtonEnabled = true;
    },
    disableBudgetButton: (state) => {
      state.isBudgetButtonEnabled = false;
    },
    addFunction: (state, action) => {
      state.budget = [...state.budget, action.payload];
    },
    updateFunction: (state, action) => {
      state.budget = state.budget.map((budget) =>
        budget.id === action.payload.id ? action.payload : budget
      );
    },
    deleteFunction: (state, action) => {
      state.budget = state.budget.filter((budget) => budget.id !== action.payload);
      console.log("budget deleted")
    },
    //   other actions..
  },
});

export const { addFunction, updateFunction, deleteFunction, enableCard, clearEnabledCard, enableBudgetButton, disableBudgetButton } =
  appSlices.actions;

export default appSlices.reducer;

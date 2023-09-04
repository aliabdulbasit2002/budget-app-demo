import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  budget: [
    {
      id: nanoid(),
      name: "Budget Name",
      amount: 0,
      finance: 0,
      financeDetails: [],
      startDate: "08/01/2023",
      endDate: "",
      description: "Additional budget information",
    },
  ],
  enabledCardId: null,
  isBudgetButtonEnabled: false,
  totalBudget: 0,
  totalFinancedBudget: 0,
  hasPaid: false,
  searchQuery: "",
  //other states...
};

export const addFinanceData = (payload) => {
  return {
    type: 'budgetExpense/addFinanceData',
    payload,
  };
};

export const setSearchQuery = (searchQuery) => ({
  type: 'budgetExpense/setSearchQuery',
  payload: searchQuery,
});

const appSlices = createSlice({
  name: "budgetExpense",
  initialState,
  reducers: {
    addFinanceData: (state, action) => {
      const { budgetId, financeData } = action.payload;
      const budget = state.budget.find((budget) => budget.id === budgetId);

      if (budget) {
        budget.finance += financeData.financeAmount;
        if (!budget.financeDetails) {
          budget.financeDetails = []; // Initialize if financeDetails doesn't exist
        }
        budget.financeDetails.push(financeData);
      }
    },
    updateHasPaid: (state, action) => {
      state.hasPaid = action.payload;
    },
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
      state.budget = state.budget.filter(
        (budget) => budget.id !== action.payload
      );
      console.log("budget deleted");
    },
    calculateTotalBudget: (state) => {
      state.totalBudget = state.budget.reduce(
        (total, budget) => total + parseInt(budget.amount),
        0
      );
    },
    calculateTotalFinancedBudget: (state) => {
      state.totalFinancedBudget = state.budget.reduce(
        (total, budget) => total + parseInt(budget.finance),
        0
      );
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    //   other actions..
  },
});

export const {
  addFunction,
  updateFunction,
  deleteFunction,
  enableCard,
  updateHasPaid,
  clearEnabledCard,
  enableBudgetButton,
  disableBudgetButton,
  calculateTotalBudget,
  calculateTotalFinancedBudget,
} = appSlices.actions;

export default appSlices.reducer;

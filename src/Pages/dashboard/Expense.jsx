/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ExpenseCard from "../../components/ExpenseCard";
import { useDispatch, useSelector } from "react-redux";

const Expense = () => {
  const dispatch = useDispatch();
  const isBudgetButtonEnabled = useSelector((state) => state.appReducer.isBudgetButtonEnabled);

  const handleBudgetButtonClick = () => {
    // Handle the budget button click action
  };
  return (
    <>
      <Flex mt={10}>
        <Button
          colorScheme="green"
          ms="auto"
          onClick={handleBudgetButtonClick}
          isDisabled={!isBudgetButtonEnabled}
        >
          Finance Budget
        </Button>
      </Flex>
      <ExpenseCard />
    </>
  );
};

export default Expense;

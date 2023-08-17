/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ExpenseCard from "../../components/ExpenseCard";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

const styles = {
  borderColor: "green",
  boxShadow: "none",
};

function ModalForm({ onClose }) {
  const [financeBudget, setFinanceBudget] = useState({
    id: nanoid(),
    finance: "",
    recipient: "",
    reference: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFinanceBudget({
      ...financeBudget,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <Box as="form" mb={5} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input
          type="number"
          size="sm"
          _focusWithin={styles}
          name="amount"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Recipient</FormLabel>
        <Input
          type="text"
          size="sm"
          _focusWithin={styles}
          name="recipient"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Reference</FormLabel>
        <Input
          type="text"
          size="sm"
          _focusWithin={styles}
          name="reference"
          onChange={handleChange}
        />
      </FormControl>
      <Box mt={5}>
        <Button variant="solid" colorScheme="green" type="submit">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
}

const Expense = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const isBudgetButtonEnabled = useSelector(
    (state) => state.appReducer.isBudgetButtonEnabled
  );

  const enabledCardId = useSelector((state) => state.appReducer.enabledCardId);
  const budget = useSelector((state) =>
    state.appReducer.budget.find((b) => b.id === enabledCardId)
  );

  const handleBudgetButtonClick = () => {
    // Handle the budget button click action
    onOpen();
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
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" mb={5}>
            {budget ? `Finance ${budget.name}` : "Finance Budget"}
          </ModalHeader>
          <ModalBody>
            <ModalForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Expense;

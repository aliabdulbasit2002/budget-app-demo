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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import BudgetCard from "../../components/BudgetCard";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addFunction, updateFunction } from "../../slices/appSlices";

const styles = {
  borderColor: "green",
  boxShadow: "none",
};

//modal form function
function ModalForm({ closeForm, initialData, onSubmit }) {
  const [budgetData, setBudgetData] = useState(
    initialData || {
      id: nanoid(),
      name: "",
      amount: 0.0,
      finance: 0.0,
      startDate: "",
      endDate: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    e.preventDefault();
    setBudgetData({
      ...budgetData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
    if (budgetData.name.trim() === "" && budgetData.amount.trim() === "") {
      return;
    }
    onSubmit(budgetData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex gap={5}>
        <FormControl>
          <FormLabel>Budget Name</FormLabel>
          <Input
            type="text"
            size="sm"
            placeholder="E.g Grocerries for the month"
            _focusWithin={styles}
            name="name"
            value={budgetData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            size="sm"
            _focusWithin={styles}
            name="amount"
            value={budgetData.amount}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <Flex gap={5} mt={5}>
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="date"
            size="sm"
            _focusWithin={styles}
            color="gray.500"
            name="startDate"
            value={budgetData.startDate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input
            type="date"
            size="sm"
            _focusWithin={styles}
            color="gray.500"
            name="endDate"
            value={budgetData.endDate}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt={5}>
        <FormLabel>Description</FormLabel>
        <Textarea
          size="sm"
          _focusWithin={styles}
          name="description"
          value={budgetData.description}
          onChange={handleChange}
        />
      </FormControl>
      <Flex>
        <Box mx="auto" mt={5}>
          <Button
            variant="outline"
            colorScheme="whatsapp"
            mr={3}
            onClick={closeForm}
          >
            Close
          </Button>
          <Button variant="solid" colorScheme="green" type="submit">
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

// budget component
const Budget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBudget, setSelectedBudget] = useState(null); // state for editing budget

  const handleEditBudget = (budget) => {
    setSelectedBudget(budget); // prefilling form with existing budget information
    onOpen();
  };

  //use effect hook is a better approach for settling time conflict and persistence caused by the edit form resetting onClose. this is because we are using the same form for handling both edit and adding budget data.
  useEffect(() => {
    if (!isOpen) {
      setSelectedBudget(null); // Reset selectedBudget when modal is closed
    }
  }, [isOpen]);

  const dispatch = useDispatch();

  const handleUpdateBudget = (updatedBudget) => {
    if (selectedBudget) {
      const updatedBudgetData = {
        ...selectedBudget,
        ...updatedBudget,
      };
      dispatch(updateFunction(updatedBudgetData)); // Handle update
    } else {
      dispatch(addFunction(updatedBudget)); // Handle add
    }
    onClose();
  };

  return (
    <>
      <Flex mt={5} px={5}>
        <Button
          leftIcon={<IoIosAdd />}
          colorScheme="whatsapp"
          variant="outline"
          ms="auto"
          onClick={onOpen}
        >
          Add New Budget
        </Button>
      </Flex> 
      <BudgetCard onEditBudget={handleEditBudget} />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setSelectedBudget(null);
          onClose();
        }}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" mb={5}>
            {selectedBudget ? "Edit Budget" : "Add New Budget"}
          </ModalHeader>
          <ModalBody>
            <ModalForm
              initialData={selectedBudget}
              closeForm={onClose}
              onSubmit={handleUpdateBudget}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Budget;

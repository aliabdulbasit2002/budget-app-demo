/* eslint-disable no-unused-vars */
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosAdd } from "react-icons/io";

const Expense = () => {
  return (
    <>
      <Flex mt={10}>
        <Button leftIcon={<IoIosAdd />} colorScheme="red" ms="auto">
          Pay Expense
        </Button>
      </Flex>
    </>
  );
};

export default Expense;

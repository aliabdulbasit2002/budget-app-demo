/* eslint-disable no-unused-vars */
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosAdd } from "react-icons/io";

const Budget = () => {
  return (
    <>
      <Flex mt={10}>
        <Button leftIcon={<IoIosAdd />} colorScheme="green" ms="auto">
          Add New Budget
        </Button>
      </Flex>
      
    </>
  );
};

export default Budget;

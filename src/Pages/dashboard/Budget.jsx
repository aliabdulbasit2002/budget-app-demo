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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import BudgetCard from "../../components/BudgetCard";

const styles = {
  borderColor: "green",
  boxShadow: "none",
};

function ModalForm() {
  return (
    <Box as="form">
      <Flex gap={5}>
        <FormControl>
          <FormLabel>Budget Name</FormLabel>
          <Input
            type="text"
            size="sm"
            placeholder="E.g Grocerries for the month"
            _focusWithin={styles}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input type="number" size="sm" _focusWithin={styles} />
        </FormControl>
      </Flex>
      <Flex gap={5} mt={5}>
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input type="date" size="sm" _focusWithin={styles} color="gray.500" />
        </FormControl>
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input type="date" size="sm" _focusWithin={styles} color="gray.500" />
        </FormControl>
      </Flex>
      <FormControl mt={5}>
        <FormLabel>Description</FormLabel>
        <Textarea size="sm" _focusWithin={styles} />
      </FormControl>
    </Box>
  );
}

const Budget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex mt={10}>
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
      <BudgetCard/>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" mb={5}>Add New Budget</ModalHeader>
          <ModalBody>
            <ModalForm />
          </ModalBody>
          <ModalFooter >
            <Box mx="auto">
              <Button variant="outline" colorScheme="whatsapp" mr={3}  onClick={onClose}>
                Close
              </Button>
              <Button variant="solid" colorScheme="green">Submit</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Budget;

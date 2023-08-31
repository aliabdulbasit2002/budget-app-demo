/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ExpenseHistory = () => {
  const budgetArray = useSelector((state) => state.appReducer.budget);

  const expenseHistoryIsEmpty = budgetArray.every(
    (budget) => budget.financeDetails.length === 0
  );

  return (
    <>
      <Stack mt={3}>
        <Text fontWeight="bold">Expense History</Text>
        <Box h="45vh" bg="white" rounded="xl">
          {expenseHistoryIsEmpty ? (
            <>
              <Flex
                fontWeight="bold"
                color="gray.500"
                justify="center"
                gap={{ lg: 5, xl: 16 }}
              >
                <Text>Merchant</Text>
                <Text>Reference</Text>
                <Text>Amount</Text>
                <Text>Date</Text>
              </Flex>
              <Text
                align="center"
                mt="25%"
                color="gray.500"
                w="100%"
                fontSize="sm"
              >
                Finance a budget to see your expense history
              </Text>
            </>
          ) : (
            <TableContainer p={2}>
              <Table variant="simple">
                <>
                  <Thead>
                    <Tr>
                      <Th>Merchant</Th>
                      <Th>Reference</Th>
                      <Th>Amount</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {budgetArray.map((budget) =>
                      budget.financeDetails.map((financeDetail, index) => (
                        <Tr fontSize="xs" key={index}>
                          <Td>{financeDetail.recipient}</Td>{" "}
                          {/* Merchant name */}
                          <Td>{financeDetail.reference}</Td> {/* Reference */}
                          <Td>
                            GHS {financeDetail.financeAmount.toFixed(2)}
                          </Td>{" "}
                          {/* Amount */}
                          <Td>{financeDetail.date}</Td> {/* Date */}
                        </Tr>
                      ))
                    )}
                  </Tbody>
                </>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default ExpenseHistory;

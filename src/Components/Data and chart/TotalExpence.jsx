import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalFinancedBudget } from "../../slices/appSlices";
import { SiExpensify } from "react-icons/si";


const TotalExpence = () => {
  const state = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalFinancedBudget()); // Calculate total budget on component mount
  }, [dispatch]);

  return (
    <Stat p={5} rounded="xl" h="125px" bg="gray.50" shadow="lg" borderTop="5px solid" borderTopColor="gray.300">
      <Flex align="center">
        <StatLabel as={Text} fontWeight="bold">
          Total Expense
        </StatLabel>
        <Box ms="auto" bg="whatsapp.500" rounded="full" padding="8px">
          <SiExpensify color="white" fontSize="1.25rem"/>
        </Box>
      </Flex>
      <StatNumber>GHS {state.totalFinancedBudget}.00</StatNumber>
    </Stat>
  );
};

export default TotalExpence;

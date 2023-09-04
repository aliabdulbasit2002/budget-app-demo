import {
  Box,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalBudget } from "../../slices/appSlices";
import { PiPiggyBankBold } from "react-icons/pi";

const TotalBudget = () => {
  const state = useSelector((state) => state.appReducer);

  const budgetUtilized = (state.totalFinancedBudget / state.totalBudget) * 100

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalBudget()); // Calculate total budget on component mount
  }, [dispatch]);


  return (
    <Stat shadow="lg" p={5} bg="white" rounded="xl" h={{lg: "125px"}} borderTop="5px solid limegreen">
      <Flex align="center">
        <StatLabel as={Text} fontWeight="bold">
          Total Budget
        </StatLabel>
        <Box ms="auto" bg="whatsapp.500" rounded="full" padding="8px">
          <PiPiggyBankBold color="yellow" fontSize="1.25rem"/>
        </Box>
      </Flex>
      <StatNumber>GHS {state.totalBudget}.00</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        {isNaN(budgetUtilized) ? "0.00%" : `${budgetUtilized.toFixed(2)}%`}
      </StatHelpText>
    </Stat>
  );
};

export default TotalBudget;

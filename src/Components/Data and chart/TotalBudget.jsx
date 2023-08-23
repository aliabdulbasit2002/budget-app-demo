import {
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

const TotalBudget = () => {
  const state = useSelector((state) => state.appReducer);

  const budgetUtilized = (state.totalFinancedBudget / state.totalBudget) * 100

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalBudget()); // Calculate total budget on component mount
  }, [dispatch]);


  return (
    <Stat shadow="sm" p={5} bg="white" rounded="xl">
      <StatLabel as={Text} fontWeight="bold">
        Total Budget
      </StatLabel>
      <StatNumber>GHS {state.totalBudget}.00</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        {budgetUtilized.toFixed(2)}%
      </StatHelpText>
    </Stat>
  );
};

export default TotalBudget;

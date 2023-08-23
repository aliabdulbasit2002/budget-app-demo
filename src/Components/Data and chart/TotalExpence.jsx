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
import { calculateTotalFinancedBudget } from "../../slices/appSlices";

const TotalExpence = () => {
  const state = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalFinancedBudget()); // Calculate total budget on component mount
  }, [dispatch]);
  return (
    <Stat shadow="sm" p={5} bg="white" rounded="xl">
      <StatLabel as={Text} fontWeight="bold">
        Total Expense
      </StatLabel>
      <StatNumber>GHS {state.totalFinancedBudget}.00</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>
  );
};

export default TotalExpence;

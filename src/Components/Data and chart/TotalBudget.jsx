import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const TotalBudget = () => {
  return (
    <Stat shadow="sm" p={5} bg="white">
      <StatLabel as={Text} fontWeight="bold">
        Total Budget
      </StatLabel>
      <StatNumber>345,670</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>
  );
};

export default TotalBudget;

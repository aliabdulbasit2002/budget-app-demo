import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const TotalExpence = () => {
  return (
    <Stat shadow="sm" p={5} bg="white" rounded="xl">
      <StatLabel as={Text} fontWeight="bold">
        Total Expense
      </StatLabel>
      <StatNumber>345,670</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>
  );
};

export default TotalExpence;

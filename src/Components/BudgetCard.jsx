/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const BudgetCard = ({onEditBudget}) => {
  const state = useSelector((state) => {
    return state.appReducer;
  });

  return (
    <>
      <Flex mt={5} gap={5} mx={10}>
        {state.budget.map((budget) => {
          const isGreen = budget.finance <= budget.amount;
          return (
            <Card
              key={budget.id}
              w="fit-content"
              borderTop={isGreen ? "5px solid limegreen" : "5px solid crimson"}
              bg="gray.50"
              shadow="lg"
            >
              <CardBody>
                <Heading size="sm">{budget.name}</Heading>
                <Flex mt={4} fontSize="sm">
                  <Text>GHS {budget.finance}</Text> {/*finance amount = 100*/}
                  <Text ms="auto">GHS {budget.amount}</Text>{" "}
                  {/*budget amount = 200*/}
                </Flex>
                <Progress
                  rounded={5}
                  colorScheme={isGreen ? "whatsapp" : "red"}
                  hasStripe
                  my={4}
                  isAnimated
                  value={(budget.finance / budget.amount) * 100}
                />
                <Flex align="center" mt={4} gap={4}>
                  <Text fontSize="xs" fontStyle="italic" color="gray.600">
                    {budget.description.substring(0, 25)}...
                  </Text>
                  <Button
                    ms="auto"
                    size="xs"
                    variant="outline"
                    colorScheme="whatsapp"
                    py={3}
                    onClick={()=> onEditBudget(budget)}
                  >
                    View Details
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default BudgetCard;

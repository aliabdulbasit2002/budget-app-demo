import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import ExpenseBreakdown from "../../Components/ExpenseBreakdown";
import DataChart from "../../components/Data and chart/DataChart";
import TotalExpence from "../../components/Data and chart/TotalExpence";
import TotalBudget from "../../components/Data and chart/TotalBudget";
import ExpenseHistory from "../../components/ExpenseHistory";
import WeeklyChart from "../../components/Data and chart/WeeklyChart";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const pricingData = [
  {
    title: "Basic",
    price: "¢0.00",
    image: "",
    description: [
      "View monthly budget and expense.",
      "Finance budget right from the app.",
      "View recent Expense History.",
    ],
    mt: 5,
  },
  {
    title: "Pro",
    price: "¢9.99",
    image: "",
    description: [
      "View monthly budget and expense.",
      "Finance budget right from the app.",
      "View recent Expense History.",
      "See weekly totals of budgets and expenses.",
      "No Ads.",
    ],
  },
];

const styles = {
  borderColor: "green",
  boxShadow: "none",
};

function CheckoutForm() {
  const publicKey = "pk_test_94cabd0c9abff32deda8c2bdcc10c41d1faee914";
  const amount = 10; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      toast({
        description: "Thanks for doing business with us! Come back soon!!",
        duration: 3000,
        status: "success",
        colorScheme: "green",
      }),
        navigate("/");
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <Container mb={5} maxW={{ lg: "40vw" }}>
        <Text fontWeight="bold" color="green.500" fontStyle="italic">
          This is a one-time payment of GHS 9.00
        </Text>
        <form>
          <FormControl mt={5}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              size="sm"
              _focusWithin={styles}
              name="name"
              onChange={(e) => setName(e.target.value)}
              borderColor="green.500"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              size="sm"
              _focusWithin={styles}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              borderColor="green.500"
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              size="sm"
              _focusWithin={styles}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              borderColor="green.500"
            />
          </FormControl>
        </form>
        <Box
          mt={5}
          bg="whatsapp.500"
          w="fit-content"
          color="white"
          px={4}
          py={2}
          rounded="md"
        >
          <PaystackButton {...componentProps} />
        </Box>
      </Container>
    </>
  );
}

function Pricing() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(2, 1fr)" p={5} gap={10}>
        {pricingData.map((pricing, index) => (
          <Card
            key={index}
            height="50vh"
            textAlign="center"
            bg="gray.50"
            shadow="2xl"
          >
            <CardHeader>
              <Heading size="lg">{pricing.title}</Heading>
            </CardHeader>
            <CardBody>
              {pricing.description.map((desc, descIndex) => (
                <Text
                  key={descIndex}
                  fontSize="sm"
                  w="80%"
                  mx="auto"
                  color="gray.500"
                  fontStyle="italic"
                >
                  {desc}
                </Text>
              ))}
              <Text fontSize="4xl" mt={pricing.mt} fontWeight="semibold">
                {pricing.price}
              </Text>
            </CardBody>
            <CardFooter pt={-5}>
              {pricing.title === "Basic" ? null : (
                <Button mx="auto" colorScheme="whatsapp" onClick={onOpen}>
                  Proceed
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="gray.100" py={10} px={5}>
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="3xl">
            Checkout
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CheckoutForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const Home = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderChart = () => {
    if (activeTab === "Monthly") {
      return <DataChart />;
    } else if (activeTab === "Weekly") {
      return <WeeklyChart />;
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid templateColumns="repeat(12,1fr)" mt={10} py={5}>
        <GridItem colSpan={7} me={10}>
          <HStack mb={6} gap={6} mt={6} w="90%">
            <TotalExpence />
            <TotalBudget />
          </HStack>
          <HStack mb={6} gap={6}>
            <Text
              fontWeight="bold"
              color={activeTab === "Monthly" ? "green.500" : "black"}
              borderBottom={
                activeTab === "Monthly" ? "1px solid" : "1px solid transparent"
              }
              cursor="pointer"
              onClick={() => handleTabChange("Monthly")}
            >
              Monthly
            </Text>
            <Text
              fontWeight="bold"
              color={activeTab === "Weekly" ? "green.500" : "black"}
              borderBottom={
                activeTab === "Weekly" ? "1px solid" : "1px solid transparent"
              }
              cursor="pointer"
              onClick={() => onOpen()}
            >
              Weekly
            </Text>
          </HStack>
          {renderChart()}
        </GridItem>
        <GridItem colSpan={5}>
          <ExpenseBreakdown />
          <ExpenseHistory />
        </GridItem>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent bg="gray.100" py={10} px={5}>
          <ModalHeader textAlign="center">Pricing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Pricing />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;

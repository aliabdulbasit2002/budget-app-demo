import { Button, useToast } from "@chakra-ui/react";
import { logout } from "../Config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      setIsLoading(false);
      toast({
        description: "successfully logged-out",
        status: "success",
        duration: 4000,
        colorScheme: "green",
      });
      navigate({ pathname: "/login" });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 4000,
      });
    }
  };

  return (
    <div>
      <Button onClick={handleLogout} colorScheme="green" isLoading={isLoading}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;

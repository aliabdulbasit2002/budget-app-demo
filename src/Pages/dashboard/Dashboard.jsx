import { useToast } from "@chakra-ui/react";
import { logout } from "../../Config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Sidebar/Navbar";

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
    <>
      <Navbar handleLogout={handleLogout} isLoading={isLoading} />
    </>
  );
};

export default Dashboard;

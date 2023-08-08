import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;

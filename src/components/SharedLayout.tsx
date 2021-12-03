import React from "react";
import { Box, Container } from "@chakra-ui/react";
export const SharedLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box w="full" minH="100vh" bgColor="gray.50" py={{ base: 2, md: 4 }}>
    <Container maxW={{ base: "container.xl", md: "90%" }}>
      {children}
      </Container>
    </Box>
  );
};

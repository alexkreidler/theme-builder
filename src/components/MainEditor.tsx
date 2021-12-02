import React from "react";
import { Box, Center, Heading, Flex, Stack, Container } from "@chakra-ui/react";
export const MainEditor = () => {
  return (
    <Box w="full" minH="100vh" bgColor="gray.50" py={{ base: 2, md: 4 }}>
      <Container maxW={{base: "container.xl", md:"90%"}}>
        <Heading size="md" my={3}>Theme Builder</Heading>
        <Stack direction={{ base: "column", xl: "row" }} spacing={8}>
          <Box flexGrow={1} bgColor="white" p={6} borderRadius="md">
            <Heading size="md">Editor</Heading>
          </Box>
          <Box flexGrow={1} bgColor="white" p={6} borderRadius="md">
            <Heading size="md">Preview</Heading>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

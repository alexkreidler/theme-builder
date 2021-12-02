import React, {useState} from "react";
import { Box, Center, Heading, Flex, Stack, Container } from "@chakra-ui/react";
import { Editor } from "./Editor";
import {theme as initialTheme} from "../theme"
export const MainEditor = () => {
  const [theme, setTheme] = useState(initialTheme)
  return (
    <Box w="full" minH="100vh" bgColor="gray.50" py={{ base: 2, md: 4 }}>
      <Container maxW={{base: "container.xl", md:"90%"}}>
        <Heading size="md" my={3}>Theme Builder</Heading>
        <Stack direction={{ base: "column", xl: "row" }} spacing={8}>
          <Box flexGrow={1} bgColor="white" p={6} borderRadius="md">
            <Heading size="md" mb={3}>Editor</Heading>
            <Editor theme={theme}/>
          </Box>
          <Box flexGrow={1} bgColor="white" p={6} borderRadius="md">
            <Heading size="md">Preview</Heading>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Stack,
  Container,
  ChakraTheme,
} from "@chakra-ui/react";
import { Editor } from "./Editor";
import { theme as initialTheme } from "../theme";

import { filterTheme } from "../services/themeEditor";
import { Preview } from "./Preview";

// import { ThemeProvider } from '@emotion/react'
//
export const MainEditor = () => {
  const [theme, setTheme] = useState(Object.assign({}, initialTheme));
  const handleChange = (update) =>
    setTheme((prev) => Object.assign({}, prev, update));
  // const changeTheme = (current) => (update) => {setTheme(Object.assign(current, update))}
  return (
    <Box w="full" minH="100vh" bgColor="gray.50" py={{ base: 2, md: 4 }}>
      <Container maxW={{ base: "container.xl", md: "90%" }}>
        <Heading size="md" my={3}>
          Theme Builder
        </Heading>
        <Stack direction={{ base: "column", xl: "row" }} spacing={8}>
          <Box minW="xl" bgColor="white" p={6} borderRadius="md">
            <Heading size="md" mb={3}>
              Editor
            </Heading>
            <Editor theme={filterTheme(theme) as any} onChange={handleChange} />
          </Box>
          <Box flexGrow={1} bgColor="white" p={6} borderRadius="md">
            <Heading size="md">Preview</Heading>
            <Preview theme={theme} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

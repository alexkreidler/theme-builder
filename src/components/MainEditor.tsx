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
import { SharedLayout } from "./SharedLayout";
import { Previews } from "./Previews";

// import { ThemeProvider } from '@emotion/react'
//
export const MainEditor = () => {
  const [theme, setTheme] = useState(Object.assign({}, initialTheme));
  const handleChange = (update) =>
    setTheme((prev) => Object.assign({}, prev, update));
  console.log(theme);
  // const changeTheme = (current) => (update) => {setTheme(Object.assign(current, update))}
  return (
    <Box bgColor="gray.50">
      <Box px={6} py={2}>
        <Heading size="md" my={3}>
          Theme Builder
        </Heading>
      </Box>
      <Stack direction={{ base: "column", xl: "row" }} spacing={8} px={6}>
        <Box minW="xl" borderRadius="md">
          <Heading size="md" mb={3}>
            Editor
          </Heading>
          <Editor
            theme={filterTheme(theme) as any}
            onChange={handleChange}
            onSubmit={handleChange}
          />
        </Box>
        <Box flexGrow={1} borderRadius="md" bgColor="white" p={6} borderRadiues="md">
          <Previews theme={theme}/>
        </Box>
      </Stack>
    </Box>
  );
};

import {
  Box,
  Center,
  Heading,
  Flex,
  Stack,
  Container,
  ChakraTheme,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React, { useState } from "react";

import { Preview } from "./Preview";
import { ThemePreview } from "./ThemePreview";

import BasicLayout from "../previews/landing/layouts/landing";
// import _ from "lodash";
export const previews = [
  {
    label: "Chakra Theme Preview",
    value: "chakra",
    component: <ThemePreview />,
  },
  { label: "Landing Page", value: "landing", component: <BasicLayout /> },
];

export const Previews = ({ theme }) => {
  const [preview, setPreview] = useState(previews[0]);
  return (
    <Box>
      <Flex>
        <Box flexGrow={1}>
          <Heading size="md">Preview</Heading>
        </Box>
        <Box w="xs">
          <Select
            placeholder="Select Preview Page"
            colorScheme="purple"
            options={previews}
            onChange={(p) => setPreview(p)}
            value={preview}
          />
        </Box>
      </Flex>
      <Preview theme={theme}>
        {preview.component}
        {/* {_.find(previews, (v) => v.value == preview).component} */}
      </Preview>
    </Box>
  );
};

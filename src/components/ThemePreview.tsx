import React from "react";
import { Box, Heading, SimpleGrid, Stack, Text, useTheme } from "@chakra-ui/react";
import { relevantProperties } from "../services/themeEditor";
import { SharedLayout } from "./SharedLayout";
// import { theme } from "../theme";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const PreviewSection = ({
  themeKey,
  children,
}: {
  themeKey?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Box w="full" bgColor="white" borderRadius="md">
      <Heading size="sm" color="gray.600" mb={2}>
        {themeKey.toUpperCase()}
      </Heading>
      {children}
    </Box>
  );
};

export const FontPreview = () => {
  const theme = useTheme()
  return (
    <PreviewSection themeKey="Fonts">
      <Stack spacing={6}>
        {Object.entries(theme.fonts).map(([fontFamily, v]) => (
          <Stack key={fontFamily} spacing={1}>
            <Text fontWeight="bold">
              {fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1)}
            </Text>
            <Box>
              <Text display="inline" mb={1} fontWeight="semibold">
                {(v as string).split(",")[0]}
              </Text>
              <Text display="inline" color="gray.600" ml={1}>
                Family
              </Text>
            </Box>
            <SimpleGrid minChildWidth={48} mr={8}>
              {alphabet.split("").map((v) => (
                <Box
                  key={v}
                  p={4}
                  py={1}
                  display="inline-block"
                  //   bgColor="gray.50"
                  //   borderRadius="md"
                  //   m={1}
                >
                  <Text fontSize="3xl" fontFamily={fontFamily}>
                    {v}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
            <Text color="gray.600" mb={1}>
              Weights
            </Text>
            <Stack direction="row" spacing={6}>
              {Object.entries(theme.fontWeights).map(([fontWeight, v]) => (
                <Box key={fontWeight} display="inline-block">
                  <Text>{v}</Text>
                  <Text
                    fontFamily={fontFamily}
                    fontSize="3xl"
                    fontWeight={fontWeight}
                  >
                    Aa
                  </Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </PreviewSection>
  );
};

const getRealSpace = (realSpace: string) => parseFloat(realSpace); //.replace("rem", "").replace("em", "").replace("px", ""));


export const SpacingPreview = () => {
  const theme = useTheme()
  const spaces = Object.entries(theme.space).sort((a, b) => {
    return getRealSpace(a[1]) > getRealSpace(b[1]);
  });

  return (
    <PreviewSection themeKey="Spacing">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Spacing Key</Th>
            <Th>Real Value</Th>
            <Th>Example</Th>
          </Tr>
        </Thead>
        <Tbody>
          {spaces.map(([spaceName, realSpace]) => (
            <Tr key={spaceName}>
              <Th>{spaceName}</Th>
              <Th>{realSpace}</Th>
              <Th>
                <Box bgColor="blue.100" w={spaceName} h={3}></Box>
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </PreviewSection>
  );
};

export const ShadowPreview = () => {
  const theme = useTheme()
  return (
    <PreviewSection themeKey="Shadow">
      <SimpleGrid
        minChildWidth="15rem"
        mr={8}
        spacing={4}
        spacingY={12}
        my={10}
      >
        {Object.entries(theme.shadows).map(([shadowKey, v]) => (
          <Box
            // border="1px solid lightgrey"
            borderRadius="md"
            p={6}
            shadow={shadowKey}
            key={shadowKey}
          >
            {shadowKey}
          </Box>
        ))}
      </SimpleGrid>
    </PreviewSection>
  );
};

export const BorderPreview = () => {
  const theme = useTheme()
  return (
    <PreviewSection themeKey="Borders">
      <Heading size="sm" my={2}>
        Radii
      </Heading>
      <SimpleGrid minChildWidth="15rem" mr={8} spacing={4}>
        {Object.entries(theme.radii).map(([borderKey, v]) => (
          <Box
            border="1px solid lightgrey"
            // bgColor="blue.700"
            p={6}
            borderRadius={borderKey}
            key={borderKey}
          >
            {borderKey}
          </Box>
        ))}
      </SimpleGrid>
      <Heading size="sm" my={2}>
        Size
      </Heading>
      <SimpleGrid minChildWidth="15rem" mr={8} spacing={4}>
        {Object.entries(theme.borders).map(([borderKey, v]) => (
          <Box border={borderKey} p={6} borderColor="gray.300" key={borderKey}>
            {borderKey}
          </Box>
        ))}
      </SimpleGrid>
    </PreviewSection>
  );
};

//@ts-ignore
const alphabet = String.fromCharCode(...Array(123).keys()).slice(65);

export const ThemePreview = () => {
  return (
    <Stack spacing={8} mt={6}>
      <FontPreview />
      <SpacingPreview />
      <BorderPreview />
      <ShadowPreview />
      {/* {relevantProperties.map((v) => (
          <PreviewSection key={v} themeKey={v} />
        ))} */}
    </Stack>
  );
};

export const ThemePreviewPage = () => {
  return (
    <SharedLayout>
      <Heading mb={4}>Theme Builder Preview</Heading>
      <ThemePreview />
    </SharedLayout>
  );
};

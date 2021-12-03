import React from "react";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { relevantProperties } from "../services/themeEditor";
import { SharedLayout } from "./SharedLayout";
import { theme } from "../theme";

export const PreviewSection = ({
  themeKey,
  children,
}: {
  themeKey?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Box w="full" bgColor="white" p={4} borderRadius="md">
      <Heading size="sm" color="gray.600" mb={2}>
        {themeKey.toUpperCase()}
      </Heading>
      {children}
    </Box>
  );
};

//@ts-ignore
const alphabet = String.fromCharCode(...Array(123).keys()).slice(65);

export const ThemePreview = () => {
  return (
    <SharedLayout>
      <Heading mb={4}>Theme Builder Preview</Heading>
      <Stack>
        <PreviewSection themeKey="Fonts">
          <Stack spacing={6}>
            {Object.entries(theme.fonts).map(([fontFamily, v]) => (
              <Stack spacing={1}>
                <Text fontWeight="bold">{fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1)}</Text>
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
                    <Box display="inline-block">
                      <Text>{v}</Text>
                      <Text fontFamily={fontFamily} fontSize="3xl" fontWeight={fontWeight}>
                        Aa
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </PreviewSection>
        {relevantProperties.map((v) => (
          <PreviewSection key={v} themeKey={v} />
        ))}
      </Stack>
    </SharedLayout>
  );
};
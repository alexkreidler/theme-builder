import React from "react";
import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";

import BasicLayout from "../previews/landing/layouts/landing";
import { ThemePreview } from "./ThemePreview";

export const Preview = ({ theme }: { theme: any }) => {
  return (
    <Box className="builder-preview" sx={{ fontFamily: "body" }}>
      <ThemeProvider theme={theme} cssVarsRoot=".builder-preview">
        {/* <BasicLayout /> */}
        <ThemePreview/>
      </ThemeProvider>
    </Box>
  );
};

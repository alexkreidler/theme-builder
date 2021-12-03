import React from "react";
import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";

export const Preview = ({ theme, children }) => {
  return (
    <Box className="builder-preview" sx={{ fontFamily: "body" }}>
      <ThemeProvider theme={theme} cssVarsRoot=".builder-preview">
        {children}
      </ThemeProvider>
    </Box>
  );
};

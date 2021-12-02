import React from "react";
import Form from "@rjsf/bootstrap-4";
import { ChakraTheme } from "@chakra-ui/react";
import raw_schema from "../data/chakra_theme.schema.json";
import { makeJSONSchema } from "../services/themeEditor";

const schema = makeJSONSchema(raw_schema);

export const Editor = ({
  theme,
  onChange,
  onSubmit,
}: {
  theme: ChakraTheme;
  onChange?: (theme: any) => void;
  onSubmit?: (theme: any) => void;
}) => {
  return (
    <Form
      schema={schema}
      formData={theme}
      onChange={(d) => onChange(d.formData)}
      onSubmit={(d) => onSubmit(d.formData)}
    />
  );
};

import React from "react";
import Form from "@rjsf/bootstrap-4";
import {ChakraTheme} from "@chakra-ui/react"
import raw_schema from "../data/chakra_theme.schema.json"
import { makeJSONSchema } from "../services/themeEditor";

const schema = makeJSONSchema(raw_schema)

const log = (type) => console.log.bind(console, type);

const handleSubmit = (chg) => (e) => {
  console.log(e);
  chg(e.formData)
}

export const Editor = ({theme, onChange}: {theme: ChakraTheme, onChange: (theme: any) => void}) => {
  return (
    <Form
      schema={schema}
      formData={theme}
      onChange={log("changed")}
      onSubmit={handleSubmit(onChange)}
      onError={log("errors")}
    />
  );
};

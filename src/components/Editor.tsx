import React from "react";
import Form from "@rjsf/bootstrap-4";
import {ChakraTheme} from "@chakra-ui/react"
import raw_schema from "../data/chakra_theme.schema.json"
import { makeJSONSchema } from "../services/themeEditor";

const schema = makeJSONSchema(raw_schema)

const log = (type) => console.log.bind(console, type);

export const Editor = ({theme}: {theme: ChakraTheme}) => {
  return (
    <Form
      schema={schema}
      formData={theme}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
  );
};

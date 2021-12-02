import React from "react";
import Form from "@rjsf/bootstrap-4";
import {ChakraTheme} from "@chakra-ui/react"
import schema from "../data/chakra_theme.schema.json"

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

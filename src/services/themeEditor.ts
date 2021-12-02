import _ from "lodash";

export const relevantProperties = ["fonts", "radii", "blur", "shadows"];

export const filterTheme = (t: any) => _.pick(t, relevantProperties);

export const makeJSONSchema = (o: any) => {
  o.definitions["ACustomChakraTheme"] = {
    type: "object",
    additionalProperties: false,
    properties: _.pick(o.definitions["ChakraTheme"].properties, relevantProperties),
  };
  o.$ref = "#/definitions/ACustomChakraTheme"
  o.$schema = undefined
  console.log(o);
  
  return o
};

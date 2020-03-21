import { GraphQLScalarType, Kind } from "graphql";

// Based on answer by Daniel Rearden on Stack Overflow: https://stackoverflow.com/a/49911974/6651552

const MAX_INT = 2147483647;
const MIN_INT = -2147483648;
const coerceIntString = (inputValue: number) => {
  if (Number.isInteger(inputValue)) {
    if (inputValue < MIN_INT || inputValue > MAX_INT) {
      throw new TypeError(
        `Error: Value "${String(
          inputValue
        )}" is outside of range for 32-bit signed integer.`
      );
    }
    return inputValue;
  }
  return String(inputValue);
};
const IntStringType = new GraphQLScalarType({
  name: "IntString",
  description:
    "The IntString scalar type represents a merge of Int and String scalar types. The String scalar type represent textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize: coerceIntString,
  parseValue: coerceIntString,
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.INT:
        return coerceIntString(parseInt(ast.value, 10));
      case Kind.STRING:
        return ast.value;
    }
    return undefined;
  }
});

// To add the resolver to Apollo Server as detailed here: https://www.apollographql.com/docs/apollo-server/schema/scalars-enums/

export const intStringResolvers = {
  IntString: IntStringType
};

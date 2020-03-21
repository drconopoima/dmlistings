const merge = require("lodash.merge");
import { listingsResolvers } from "./listingsResolvers";
import { intStringResolvers } from "./intStringResolver";

export const resolvers = merge(listingsResolvers, intStringResolvers);

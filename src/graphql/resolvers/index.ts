const merge = require("lodash.merge");
import { listingsResolvers } from "./listingsResolvers";

export const resolvers = merge(listingsResolvers);

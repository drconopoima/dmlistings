import { IResolvers } from "apollo-server-express";
import { Database, Listing } from "../../../lib/types";
import { ObjectID } from "mongodb";

export const listingsResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      { limit = 50 }: { limit: number },
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings
        .find({})
        .limit(limit)
        .toArray();
    }
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteResult = await db.listings.findOneAndDelete({
        _id: new ObjectID(id)
      });
      if (!deleteResult.value) {
        throw new Error(`Failed to delete listing of id=${id}`);
      }
      return deleteResult.value;
    }
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString()
    // Trivial resolvers taken care by Apollo Server
    // title: (listing: Listing): string => listing.title,
    // image: (listing: Listing): string => listing.image,
    // address: (listing: Listing): string => listing.address,
    // price: (listing: Listing): string | number => listing.price
    // numberOfBedrooms: (listing: Listing): number => listing.numberOfBedrooms,
    // numberOfBathrooms: (listing: Listing): number => listing.numberOfBathrooms,
    // rating: (listing: Listing): number => listing.rating
  }
};

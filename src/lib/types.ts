import { Collection, ObjectID } from "mongodb";

export interface Listing {
  _id: ObjectID;
  title: string;
  image: string;
  address: string;
  price: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  rating: number;
}

export interface Database {
  listings: Collection<Listing>;
}

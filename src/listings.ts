type Listing = {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number | string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  rating: number;
};

export const listings: Listing[] = [
  {
    id: "0001",
    title: "House for Sale: Club de Campo Area",
    image:
      "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/67827521_891520181213071_1189330132248067937_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=Nk159AVrT38AX9R83-5&oh=76888c02f0f429694ba2e88e65d8470a&oe=5ED701E9",
    address: "Club De Campo",
    price: "Call for Pricing. Negotiable",
    numberOfBedrooms: 4,
    numberOfBathrooms: 2,
    rating: 5
  },
  {
    id: "0002",
    title: "Big 3-story home w/Guests House: Galapagar",
    numberOfBedrooms: 20,
    numberOfBathrooms: 14,
    image:
      "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/72276141_2805557879506913_2011441983486138057_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=wPnk1mBwE0kAX_ck3xf&oh=d4f8b166cc35a6522ec12af0b0fa66a0&oe=5EC502B6",
    address: "Galapagar",
    price: 600000,
    rating: 10
  }
];

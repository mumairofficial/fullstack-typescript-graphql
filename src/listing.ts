export interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: '001',
    title: 'Clean and fully furnished apartment, 5 minutes away from CN tower',
    image: '#',
    address: '3210 Scotchmen Dr. W, Toronto, ON, CA',
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5,
  },
  {
    id: '002',
    title: 'Fully furnished apartment',
    image: '#',
    address: 'Scotchmen 3210 Dr. W, Toronto, ON, CA',
    price: 7000,
    numOfGuests: 1,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 5,
  },
  {
    id: '003',
    title: '10 square feet studio apartment',
    image: '#',
    address: 'Molana Showkat Ali Road, Toronto, ON, CA',
    price: 8500,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4,
  },
];

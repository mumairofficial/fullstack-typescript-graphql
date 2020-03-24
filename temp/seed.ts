require('dotenv').config();

import { ObjectId } from 'mongodb';

import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types';

const seed = async () => {
  try {
    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
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
        _id: new ObjectId(),
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
        _id: new ObjectId(),
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

    for (const list of listings) {
      await db.listings.insertOne(list);
    }

    console.log('[seed]: running...');
  } catch (error) {
    throw new Error('failed to seed database');
  }
};

seed();

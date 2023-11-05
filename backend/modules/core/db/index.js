import mongoose from 'mongoose';
import { MONGOOSE_CONNECTION } from '../config.js';

export async function initDatabaseConnection() {
  try {
    await mongoose.connect(MONGOOSE_CONNECTION);
    console.log('Mongodb connected');
  } catch (err) {
    console.error('Error connecting to mongodb');
    process.exit(0);
  }
}

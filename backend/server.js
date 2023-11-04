import mongoose from 'mongoose';
import { MONGOOSE_CONNECTION, PORT } from './config.js';
import { app } from './app.js';

async function main() {
  try {
    await mongoose.connect(MONGOOSE_CONNECTION);
    console.log('Mongodb connected');
  } catch (err) {
    console.error('Error connecting to mongodb');
  }

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

main().catch((err) =>
  console.error(err),
);

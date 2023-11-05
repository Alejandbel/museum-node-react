import { PORT } from './modules/core/config.js';
import { app } from './modules/core/app.js';
import { initDatabaseConnection } from './modules/core/db/index.js';

async function main() {
  await initDatabaseConnection();
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

main().catch((err) => console.error(err));

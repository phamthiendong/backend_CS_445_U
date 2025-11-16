import { initializeTransactionalContext } from 'typeorm-transactional';
import { createApp } from './app';

async function main() {
  initializeTransactionalContext();
  let app = await createApp();
  app = await app.init();
  await app.listen(process.env.SERVER_PORT);
}

main();

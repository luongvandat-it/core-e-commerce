const process = require('process');
const app = require('./src/app');
const db = require('./src/db/connectDB');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running: ${HOST}:${PORT}`);
});

const gracefulShutdown = (error) => {
  return async () => {
    if (error) {
      console.log('Error occurred during shutdown:', error);
    }

    try {
      await db.disconnect();
      console.log('Database disconnected successfully');
    } catch (err) {
      console.log('Error while disconnecting from the database:', err);
    }

    server.close(() => {
      console.log('Server closed');
      process.exit(error ? 1 : 0);
    });
  };
};

// handle exit signals
process.on('SIGINT', gracefulShutdown());
process.on('SIGTERM', gracefulShutdown());
process.on('uncaughtException', (error) => {
  console.log('Uncaught exception:', error);
  gracefulShutdown(error)();
});
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at:', promise, 'reason:', reason);
  gracefulShutdown(reason)();
});

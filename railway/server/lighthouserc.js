module.exports = {
  ci: {
    server: {
      port: Number(process.env.PORT) || 9001,
      storage: {
        storageMethod: 'sql',
        sqlDialect: 'postgres',
        sqlConnectionUrl: process.env.DATABASE_URL,
        sqlConnectionSsl: { rejectUnauthorized: false },
      },
    },
  },
};

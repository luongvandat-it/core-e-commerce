"use strict";
const poolSizeConfig = {
  minPoolSize: 3,
  maxPoolSize: 10
};

const configs = {
  dev: {
    app: {
      port: process.env.DEV_APP_PORT || 3000,
    },
    db: {
      host: process.env.DEV_DB_HOST || "localhost",
      port: process.env.DEV_DB_PORT || 27017,
      name: process.env.DEV_DB_NAME || "dev_db_name",
      username: process.env.DEV_DB_USERNAME || "dev_db_username",
      password: process.env.DEV_DB_PASSWORD || "dev_db_password",
      ...poolSizeConfig,
    },
  },
  test: {
    app: {
      port: process.env.TEST_APP_PORT,
    },
    db: {
      host: process.env.TEST_DB_HOST,
      port: process.env.TEST_DB_PORT,
      name: process.env.TEST_DB_NAME,
      username: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD,
      ...poolSizeConfig,
    },
  },
  staging: {
    app: {
      port: process.env.STAGING_APP_PORT,
    },
    db: {
      host: process.env.STAGING_DB_HOST,
      port: process.env.STAGING_DB_PORT,
      name: process.env.STAGING_DB_NAME,
      username: process.env.STAGING_DB_USERNAME,
      password: process.env.STAGING_DB_PASSWORD,
      ...poolSizeConfig,
    },
  },
  prod: {
    app: {
      port: process.env.PROD_APP_PORT,
    },
    db: {
      host: process.env.PROD_DB_HOST,
      port: process.env.PROD_DB_PORT,
      name: process.env.PROD_DB_NAME,
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      ...poolSizeConfig,
    },
  },
};

const env = process.env.NODE_ENV || "dev";

module.exports = configs[env];

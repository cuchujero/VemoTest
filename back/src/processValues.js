require('dotenv').config();

module.exports = {
    TEST_DB_USERNAME: process.env.TEST_DB_USERNAME,
    TEST_DB_PASSWORD: process.env.TEST_DB_PASSWORD,
    TEST_DB_DATABASE: process.env.TEST_DB_DATABASE,
    TEST_DB_HOST: process.env.TEST_DB_HOST,
    TEST_DB_DIALECT: process.env.TEST_DB_DIALECT,
    TEST_DB_PORT: process.env.TEST_DB_PORT,
    PRODUCTION_DB_USERNAME: process.env.PRODUCTION_DB_USERNAME,
    PRODUCTION_DB_PASSWORD: process.env.PRODUCTION_DB_PASSWORD,
    PRODUCTION_DB_DATABASE: process.env.PRODUCTION_DB_DATABASE,
    PRODUCTION_DB_HOST: process.env.PRODUCTION_DB_HOST,
    PRODUCTION_DB_DIALECT: process.env.PRODUCTION_DB_DIALECT,
    PRODUCTION_DB_PORT: process.env.PRODUCTION_DB_PORT,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
    CHARGE_PROCESS: process.env.CHARGE_PROCESS
}
const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();

const config = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: config,
});

pool.on('connect', () => {
    console.log("Connect sucessfully");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
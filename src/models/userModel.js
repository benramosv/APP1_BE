const client = require('../models/db.js');

async function getUser (email) {
    try {
        const user = await client.sql`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

module.exports = { getUser  };
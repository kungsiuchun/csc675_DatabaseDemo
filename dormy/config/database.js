// PostgreSQL database driver
// http://vitaly-t.github.io/pg-promise/index.html
const opts = {
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log(`Connection successful on DB: ${cp.database}`);
    }
};
const pgp = require('pg-promise')(opts);
const db = pgp('postgres://dormyuser:@localhost:5432/csc675');

const db = pgp(
    {
        user: 'csc648',
        host: 'dormydb.c9dmsmsbcumm.us-west-1.rds.amazonaws.com',
        port: 5432,
        database: 'dormyDB',
        user: 'csc648',
        password: 'P305kscc'
    }
);

module.exports = db;

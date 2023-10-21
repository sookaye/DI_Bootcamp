module.exports = {
    development: {
        client : 'pg',
        connection: {
            host: 'localhost',
            database: 'project01',
            user: 'postgres',
            password: '1234',
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    }
}
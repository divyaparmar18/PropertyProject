var  knex = require ("knex")({
    client: 'mysql',
    connection:{
        host: "127.0.0.1",
        user: "root",
        password: "your_new_password",
        database: "db_name"
    }
})
module.exports = (knex)
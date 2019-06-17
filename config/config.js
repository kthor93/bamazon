module.exports = {
    "development": {
        "username": "root",
        "password": process.env.DB_PASS,
        "database": "bamazon",
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL"
    }
}
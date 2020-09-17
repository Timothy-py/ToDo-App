// this file consists of paths to files required by sequelize

const path = require("path");


module.exports = {
    "config": path.resolve('./server/config', 'config.json'), //contains app config settings e.g DB auth config
    "models-path": path.resolve('./server/models'), // holds the application models
    "seeders-path": path.resolve('./server/seeders'), // holds seed data
    "migrations-path": path.resolve('./server/migrations') // contains app migrations
};
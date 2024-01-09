const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('coliseum_crud_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

function init() {
    const OfficialTags = require("./models/Tag.js");
    sequelize
        .sync({
            alter: true,
        })
        .then((res) => {
            console.log("Database connection successful");
        })
        .catch((err) => console.log("Errors", err));
}

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

function close() {
    sequelize.close();
}

module.exports = {
    sequelize,
    connect,
    init,
    close
}
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('coliseum_crud_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

function init() {
    const OfficialTag = require("./models/OfficialTag");
    const OfficialBadge = require("./models/OfficialBadge");
    const User = require("./models/User");
    const UserLike = require("./models/UserLike");
    const UserBookmark = require("./models/UserBookmark");
    const UserBadges = require("./models/UserBadges");
    const Novel = require("./models/Novel");
    const Match = require("./models/Match");
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
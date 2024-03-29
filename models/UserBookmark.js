const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");

module.exports = (sequelize, DataTypes) => {
    class UserBookmark extends Model {
    }

    UserBookmark.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        novel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    }, {
        sequelize,
        modelName: 'UserBookmark',
        tableName: 'user_bookmars',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

// Đồng bộ model với database
    return UserBookmark
}

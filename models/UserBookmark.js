const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");


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
    modelName: 'user_likes',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

// Đồng bộ model với database
module.exports = UserBookmark
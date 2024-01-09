const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");


class UserBadge extends Model {
}

UserBadge.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    badges_id: {
        type: DataTypes.STRING(40),
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'user_badges',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

// Đồng bộ model với database
module.exports = UserBadge
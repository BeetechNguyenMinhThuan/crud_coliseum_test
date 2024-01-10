const {DataTypes, Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
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
        modelName: 'UserBadge',
        tableName: 'user_badges',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return UserBadge
}

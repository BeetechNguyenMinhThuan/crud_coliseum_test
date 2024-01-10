const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");

module.exports = (sequelize, DataTypes) => {
    class NovelBadge extends Model {
    }

    NovelBadge.init({
        novel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        badges_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    }, {
        sequelize,
        modelName: 'NovelBadge',
        tableName: 'novel_badges',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return NovelBadge
}

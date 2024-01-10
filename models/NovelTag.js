const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");

module.exports = (sequelize, DataTypes) => {
    class NovelTag extends Model {
    }

    NovelTag.init({
        novel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        tag: {
            type: DataTypes.STRING(40),
            primaryKey: true,
        },

    }, {
        sequelize,
        modelName: 'NovelTag',
        tableName: 'novel_tags',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return NovelTag
}

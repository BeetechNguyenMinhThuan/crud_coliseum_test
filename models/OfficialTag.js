const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");


class OfficialTag extends Model {
}

OfficialTag.init({
    // Khai báo các trường
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag_ulid: {
        type: DataTypes.CHAR(16),
    },
    tag: {
        type: DataTypes.STRING(40),
    },
    start_at: {
        type: DataTypes.DATE
    },
    finish_at: {
        type: DataTypes.DATE
    },
}, {
    sequelize,
    modelName: 'official_tags',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

// Đồng bộ model với database
module.exports = OfficialTag
const {DataTypes, Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class OfficialBadge extends Model {
    }

    OfficialBadge.init({
        badges_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        badges_ulid: {
            type: DataTypes.STRING(16),
        },
        badges_name: {
            type: DataTypes.STRING(20),
        },
        badges_url: {
            type: DataTypes.STRING(2048),
        },
        start_at: {
            type: DataTypes.DATE
        },
        finish_at: {
            type: DataTypes.DATE
        },
    }, {
        sequelize,
        modelName: 'OfficialBadge',
        tableName: 'official_badges',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return OfficialBadge
}

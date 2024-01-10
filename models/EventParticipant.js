const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");

module.exports = (sequelize, DataTypes) => {
    class EventParticipant extends Model {
    }

    EventParticipant.init({
        event_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        novel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false

        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'EventParticipant',
        tableName: 'event_participants',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return EventParticipant
}

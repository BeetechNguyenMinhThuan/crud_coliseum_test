const {DataTypes, Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    }

    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Cognito userid
        user_uuid: {
            type: DataTypes.STRING(128),
            allowNull: false
        },

        // Cognito Name
        name: {
            type: DataTypes.STRING(128),
            allowNull: false

        },
        s3_url: {
            type: DataTypes.STRING(2048),
            allowNull: false

        },
        first_login_at:{
            type: DataTypes.DATE,
            allowNull: false

        },
        last_login_at:{
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

// Đồng bộ model với database
    return User
}

const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");


class Badge extends Model {
}

Badge.init({
    badges_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    badges_ulid: {
        type: DataTypes.CHAR(16),
    },
    badges_name: {
        type: DataTypes.STRING(20),
    },
    badges_url: {
        type: DataTypes.STRING(2048),
        allowNull: false
    },
    start_at: {
        type: DataTypes.DATE
    },
    finish_at: {
        type: DataTypes.DATE
    },
}, {
    sequelize,
    // Cấu hình thêm cho model
    timestamps: true, // Sequelize sẽ tự động quản lý các cột `createdAt` và `updatedAt`
    paranoid: true, // Kích hoạt chế độ "paranoid" cho phép sử dụng cột `deletedAt`
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

module.exports = Badge
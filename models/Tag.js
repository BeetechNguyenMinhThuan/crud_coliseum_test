const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");


class Tag extends Model {
}

Tag.init({
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
    // Cấu hình thêm cho model
    timestamps: true, // Sequelize sẽ tự động quản lý các cột `createdAt` và `updatedAt`
    paranoid: true, // Kích hoạt chế độ "paranoid" cho phép sử dụng cột `deletedAt`
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

// Đồng bộ model với database
sequelize.sync();
module.exports = Tag
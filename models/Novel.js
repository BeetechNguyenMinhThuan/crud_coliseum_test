const {DataTypes, Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Novel extends Model {
        static associate({User}) {
            this.belongsToMany(User, {through: 'UserLike', foreignKey: 'novel_id' });
        }
    }

    Novel.init({
        novel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        novel_ulid: {
            type: DataTypes.STRING(16),
            allowNull: false,
            // autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING(256),
        },
        synopsis: {
            type: DataTypes.TEXT
        },
        cover_picture_url: {
            type: DataTypes.STRING(2048),
        },
        foreword_url: {
            type: DataTypes.STRING(2048),
        },
        afterword_url: {
            type: DataTypes.STRING(2048),
        },
        setting_url: {
            type: DataTypes.STRING(2048),
        },
        note_url: {
            type: DataTypes.STRING(2048),
        },
        dictionary_url: {
            type: DataTypes.STRING(2048),
        },
        is_anonymous: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        is_publish: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        is_ranking_visble: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        is_comment: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        is_comment_publish: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        first_novel_publish_at: {
            type: DataTypes.DATE,

        },
        first_name_publish_at: {
            type: DataTypes.DATE,
        },
        first_completed_at: {
            type: DataTypes.DATE,
        },

    }, {
        sequelize,
        modelName: 'Novel',
        tableName: 'novels',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return Novel
}

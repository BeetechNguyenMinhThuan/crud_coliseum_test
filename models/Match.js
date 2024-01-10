const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../dbconfig");

class Match extends Model {}

Match.init({
  match_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  round_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  match_uuid: {
    type: DataTypes.CHAR(16),
    allowNull: true
  },
  match_name: {
    type: DataTypes.STRING(128),
    allowNull: true
  },
  vote_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  winner_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  winner_type: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Match',
  tableName: 'matches',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
});

module.exports = Match;
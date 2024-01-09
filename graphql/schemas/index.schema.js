const {officialTagSchema} = require("./officialTags.schema");
const {officialBadgeSchema} = require("./officialBadges.schema");
const {userSchema} = require("./users.schema")
const {userBadgeSchema} = require("./userBadges.schema")
const {DateTime} = require("../common/customScalars");

module.exports = [DateTime,officialBadgeSchema, officialTagSchema,userSchema,userBadgeSchema];

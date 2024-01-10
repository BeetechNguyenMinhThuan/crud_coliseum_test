const {officialTagSchema} = require("./officialTags.schema");
const {officialBadgeSchema} = require("./officialBadges.schema");
const {userSchema} = require("./users.schema")
const {userBadgeSchema} = require("./userBadges.schema")
const {DateTime} = require("../common/customScalars");
const {matchSchema} = require("./matches.schema");
const {novelSchema} = require("./novels.schema");
const {episodeSchema} = require("./episodes.schema");
const {eventSchema} = require("./events.schema");
const {roundSchema} = require("./rounds.schema");
const {userLikeSchema} = require("./userLikes.schema");

module.exports = [DateTime, officialBadgeSchema, officialTagSchema, userSchema, userBadgeSchema, userLikeSchema, matchSchema, novelSchema, episodeSchema, eventSchema, roundSchema];

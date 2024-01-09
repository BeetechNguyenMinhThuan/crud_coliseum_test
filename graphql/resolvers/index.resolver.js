const {officialTagResolver} = require("./officialTags.resolver");
const {officialBadgeResolver} = require("./officialBadges.resolver");
const {userResolver} = require("./users.resolver");

module.exports = [officialTagResolver, officialBadgeResolver, userResolver];

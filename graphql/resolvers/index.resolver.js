const {officialTagResolver} = require("./officialTags.resolver");
const {officialBadgeResolver} = require("./officialBadges.resolver");
const {userResolver} = require("./users.resolver");
const {matchResolver} = require("./matches.resolver");
const {novelResolver} = require("./novels.resolver");
const {episodeResolver} = require("./episodes.resolver");
const {eventResolver} = require("./events.resolver");
const {roundResolver} = require("./rounds.resolver");

module.exports = [officialTagResolver, officialBadgeResolver, userResolver, matchResolver, novelResolver, episodeResolver, eventResolver,roundResolver];

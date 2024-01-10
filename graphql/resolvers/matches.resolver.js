const {GraphQLError} = require("graphql/index");
const {Match} = require('../../models');

const matchResolver = {
    Query: {
        getAllMatches: async (parent, args, context) => {
            try {
                return await Match.findAll();
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        getMatchById: async (parent, {match_id}, context) => {
            try {
                return await Match.findOne({
                    where: {match_id: match_id}
                });
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Mutation: {
        createMatch: async (parent, args, context) => {
            try {
                const {round_id, match_uuid, match_name, winner_type} = args;
                return await Match.create({round_id, match_uuid, match_name, winner_type})
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        updateMatch: async (parent, args, context) => {
            try {
                const {match_id, round_id, match_uuid, match_name, winner_type} = args;
                await Match.update({match_id, round_id, match_uuid, match_name, winner_type}, {
                    where: {
                        match_id: match_id,
                    }
                })
                return Match.findOne({
                    where: {
                        match_id: match_id,
                    }
                })
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        deleteMatch: async (parent, {match_id}, context) => {
            try {
                await Match.destroy({
                    where: {match_id:match_id}
                });
                return "OK"
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    }
}

module.exports = {
    matchResolver,
};
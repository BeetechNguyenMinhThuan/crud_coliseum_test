const {GraphQLError} = require("graphql");
const {Round} = require('../../models');
const {Event} = require('../../models');
const {ErrorTypes, throwCustomError} = require("../../heplers/errorHandle");

const roundResolver = {
    Query: {
        rounds: async (parent, args, context) => {
            try {
                return await Round.findAll();
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        round: async (parent, args, context) => {
            try {
                const {round_id} = args;

                return await Round.findOne({
                    where: {round_id: round_id}
                });
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Round:{
        event: async (parent, args, context) => {
            try {
                const {event_id} = parent;

                return await Event.findOne({
                    where: {event_id: event_id}
                });
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Mutation: {
        createRound: async (parent, args, context) => {
            try {
                const data = {
                    event_id,
                    ulid,
                    round_name,
                    round_order,
                    round_start_at,
                    round_finish_at,
                    vote_start_at,
                    vote_finish_at,
                    round_type,
                    is_currentBoolean,
                    winner_count,
                    min_word_count,
                    max_word_count,
                    tag,
                    created_at,
                    updated_at,
                    deleted_at,
                } = args.input;
                return await Round.create(data)
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        updateRound: async (parent, args, context) => {
            try {
                const round_id = args.round_id
                const data = {
                    event_id,
                    ulid,
                    round_name,
                    round_order,
                    round_start_at,
                    round_finish_at,
                    vote_start_at,
                    vote_finish_at,
                    round_type,
                    is_currentBoolean,
                    winner_count,
                    min_word_count,
                    max_word_count,
                    tag,
                    created_at,
                    updated_at,
                    deleted_at,
                } = args.input;

                await Round.update(data, {
                    where: {
                        round_id: round_id,
                    }
                })
                return Round.findOne({
                    where: {
                        round_id: round_id,
                    }
                })
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        deleteRound: async (parent, args, context) => {
            try {
                const round_id = args.round_id
                await Round.destroy({
                    where: {round_id: round_id}
                });
                return "OK"
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    }
}

module.exports = {
    roundResolver,
};
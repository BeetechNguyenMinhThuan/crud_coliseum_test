const {GraphQLError} = require("graphql");
const {Round, Event, User} = require('../../models');
const {ErrorTypes, throwCustomError} = require("../../heplers/errorHandle");
const {sequelize} = require("../../models");
const validator = require('validator');
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
    Round: {
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
        updateMultipleRound: async (parent, args, context) => {
            const t = await sequelize.transaction();
            try {
                const event_id = args.event_id
                const data = {
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

                const cleanData = {
                    ...data,
                    round_name: validator.escape(data.round_name)
                }
                await Round.update(cleanData, {
                    where: {
                        event_id: event_id,
                    }, transaction: t
                })
                await User.update(
                    {first_login_at: '2024-01-10 07:51:14'},
                    {
                        where: {user_id: 1},
                        transaction: t
                    }
                );
                await t.commit();
                return "OK";

            } catch (error) {
                await t.rollback();
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
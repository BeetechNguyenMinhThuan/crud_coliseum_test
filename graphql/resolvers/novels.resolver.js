const {GraphQLError} = require("graphql");
const {Novel} = require('../../models');

const novelResolver = {
    Query: {
        novels: async (_, { page, limit }) => {
            const offset = (page - 1) * limit;
            const { count, rows } = await Novel.findAndCountAll({ offset, limit });
            return {
              novels: rows,
              novel_pagination: {
                totalItems: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
              }
            };
        },
        novel: async (parent, args, context) => {
            try {
                const {novel_id} = args;

                return await Novel.findOne({
                    where: {novel_id: novel_id}
                });
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Mutation: {
        createNovel: async (parent, args, context) => {
            try {
                const data = {
                    novel_ulid,
                    user_id,
                    title,
                    synopsis,
                    cover_picture_url,
                    foreword_url,
                    afterword_url,
                    setting_url,
                    note_url,
                    dictionary_url,
                    is_anonymous,
                    is_publish,
                    is_ranking_visible,
                    is_completed,
                    is_comment,
                    is_comment_publish,
                    first_novel_publish_at,
                    first_name_publish_at,
                    first_completed_at,
                } = args.input;
                return await Novel.create(data)
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        updateNovel: async (parent, args, context) => {
            try {
                const novel_id = args.novel_id
                const data = {
                    novel_ulid,
                    user_id,
                    title,
                    synopsis,
                    cover_picture_url,
                    foreword_url,
                    afterword_url,
                    setting_url,
                    note_url,
                    dictionary_url,
                    is_anonymous,
                    is_publish,
                    is_ranking_visible,
                    is_completed,
                    is_comment,
                    is_comment_publish,
                    first_novel_publish_at,
                    first_name_publish_at,
                    first_completed_at,
                } = args.input;
                await Novel.update(data, {
                    where: {
                        novel_id: novel_id,
                    }
                })
                return Novel.findOne({
                    where: {
                        novel_id: novel_id,
                    }
                })
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        deleteNovel: async (parent, args, context) => {
            try {
                const novel_id = args.novel_id
                await Novel.destroy({
                    where: {novel_id: novel_id}
                });
                return "OK"
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    }
}

module.exports = {
    novelResolver,
};
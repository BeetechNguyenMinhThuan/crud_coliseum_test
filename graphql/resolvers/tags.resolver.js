const {GraphQLError} = require("graphql/index");
const Tag = require("../../models/Tag");
const tagResolver = {
    Query: {
        getAllTags: async (parent, args, context) => {
            try {
                return await Tag.findAll();
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        getTagById: async (parent, args, context) => {
            try {
                const {tag_id} = args;
                return await Tag.findOne({
                    where: {tag_id: tag_id}
                });
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Mutation: {
        createTag: async (parent, args, context) => {
            try {
                const {tag_ulid, tag, start_at, finish_at} = args;
                return await Tag.create({tag_ulid, tag, start_at, finish_at})
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        updateTag: async (parent, args, context) => {
            try {
                const {tag_id, tag_ulid, tag, start_at, finish_at} = args;
                await Tag.update({tag_id, tag_ulid, tag, start_at, finish_at}, {
                    where: {
                        tag_id: tag_id,
                    }
                })
                return Tag.findOne({
                    where: {
                        tag_id: tag_id,
                    }
                })
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        deleteTag: async (parent, args, context) => {
            try {
                const {tag_id} = args;
                await Tag.destroy({
                    where: {tag_id:tag_id}
                });
                return "OK"
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    }
}

module.exports = {
    tagResolver,
};
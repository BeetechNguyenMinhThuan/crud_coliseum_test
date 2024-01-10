const {GraphQLError} = require("graphql");
const {UserLike, User, Novel} = require("../../models");
const userLikeResolver = {
    Query: {
        getUserLike: async (parent, args, context) => {
            try {
                const users = await User.findAll({
                    include: [Novel]
                });
                console.log(users)
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },

    },
    Mutation: {
        createUserLike: async (parent, args, context) => {
            try {
                const {user_id, novel_id} = args;
                const user = await User.findOne({
                    where: {user_id: user_id}
                });

                const novel = await Novel.findOne({
                    where: {novel_id: novel_id}
                });
                await user.addNovel(novel)
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        updateUserLike: async (parent, args, context) => {
            try {
                const {tag_id, tag_ulid, tag, start_at, finish_at} = args;
                await UserLike.update({tag_id, tag_ulid, tag, start_at, finish_at}, {
                    where: {
                        tag_id: tag_id,
                    }
                })
                return UserLike.findOne({
                    where: {
                        tag_id: tag_id,
                    }
                })
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        deleteUserLike: async (parent, args, context) => {
            try {
                const {tag_id} = args;
                await UserLike.destroy({
                    where: {tag_id: tag_id}
                });
                return "OK"
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    }
}

module.exports = {
    userLikeResolver,
};
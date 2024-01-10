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

        deleteUserLike: async (parent, args, context) => {
            try {
                const {user_id, novel_id} = args;
                await UserLike.destroy({
                    where: {user_id, novel_id}
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
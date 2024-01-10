const {User} = require("../../models");
const {GraphQLError} = require("graphql");
const {throwCustomError} = require("../../heplers/errorHandle");
const {ErrorTypes} = require("../../heplers/errorHandle");
const userResolver = {
    Query: {
        getUsers: async (parent, args, context) => {
            try {
                console.log(context.user);
                return await User.findAll();
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    User:{
        novel_like: async (parent, args, context) => {
            try {
                return await parent.getNovels();
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            try {
                const {
                    user_uuid,
                    name,
                    s3_url,
                    first_login_at,
                    last_login_at,
                } = args.input;

                if (!user_uuid || !name || !s3_url || !first_login_at || !last_login_at) {
                    throwCustomError(
                        "Error input.",
                        ErrorTypes.BAD_USER_INPUT,
                    );
                }
                await User.create({
                    user_uuid,
                    name,
                    s3_url,
                    first_login_at,
                    last_login_at,
                })

                return {
                    success: true,
                    message: "User created successfully"
                }
            } catch (error) {
                console.log(error)
                throw new GraphQLError(error.message);
            }
        },
    },
};

module.exports = {
    userResolver,
};

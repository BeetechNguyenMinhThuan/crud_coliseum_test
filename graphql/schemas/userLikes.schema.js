const {gql} = require("graphql-tag");

const userLikeSchema = gql`
    type UserLike {
        user_id: Int!,
        novel_id: Int!,
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }

    extend type Query {
        getUserLike: UserLike
    }

    extend type Mutation {
        createUserLike(user_id:Int, novel_id:Int): UserLike
        updateUserLike(user_id:Int, novel_id:Int): UserLike
        deleteUserLike(user_id:Int, novel_id:Int): UserLike
    }
`;

module.exports = {
    userLikeSchema,
};

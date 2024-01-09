const {gql} = require("graphql-tag");

const userBadgeSchema = gql`
    type UserBadges {
        user_id: Int,
        badge_id: String
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }

    extend type Query {
        getUserAndBadge: UserBadges
    }

    extend type Mutation {
        createUserBadge(user_id:Int, badges_id:String): UserBadges
        updateUserBadge(user_id:Int, badges_id:String): UserBadges
        deleteUserBadge(user_id:Int, badges_id:String): UserBadges
    }
`;

module.exports = {
    userBadgeSchema,
};

const { gql } = require("graphql-tag");

const userSchema = gql`
    type User {
        user_id: ID!
        user_uuid: String!
        name: String!
        s3_url: String!
        first_login_at: DateTime!
        last_login_at: DateTime!
        novel_like:[Novel]
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }

    input createUserInput {
        user_uuid: String!
        name: String!
        s3_url: String!
        first_login_at: DateTime!
        last_login_at: DateTime!
    }
    
    type UserPagination {
        users: [User!]
        totalItems: Int
        totalPages: Int
        currentPage: Int
    }


    type CreateUserResponse {
        success: Boolean!
        message: String
    }

    extend type Query {
        getUsers: [User]
        getUsersPaginate(page:Int, limit: Int): UserPagination
    }

    extend type Mutation {
        createUser(input: createUserInput): CreateUserResponse!
    }
`;

module.exports = {
  userSchema,
};

const { gql } = require("graphql-tag");
const userSchema = gql`
  scalar DateTime
  type User {
    username: String!
    email: String!
    password: String!
    imageUrl: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type CreateUserResponse {
    success: Boolean!
    message: String
  }

  type LoginUserResponse {
    success: Boolean!
    message: String
    access_token: String
  }

  type Query {
    getUsers: [User]!
  }

  type Mutation {
    register(input: RegisterInput): CreateUserResponse!
    login(input: LoginInput): LoginUserResponse!
  }
`;

module.exports = {
  userSchema,
};

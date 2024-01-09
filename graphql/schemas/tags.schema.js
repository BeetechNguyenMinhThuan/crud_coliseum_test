const {gql} = require("graphql-tag");
const tagSchema = gql`
    scalar DateTime
    type Tag {
        tag_id: ID!
        tag_ulid: String!
        tag: String!
        start_at: DateTime
        finish_at: DateTime
        created_at: DateTime
        updated_at: DateTime
        deleted_at: DateTime
    }
 
    type Query {
        getTagById(tag_id: ID!): Tag
        getAllTags: [Tag]
    }

    type Mutation {
        createTag(tag_ulid: String!, tag: String!, start_at: DateTime, finish_at: DateTime): Tag
        updateTag(tag_id: ID!, tag_ulid: String, tag: String, start_at: DateTime, finish_at: DateTime): Tag
        deleteTag(tag_id: ID!): String
    }
`;

module.exports = {
    tagSchema: tagSchema,
};

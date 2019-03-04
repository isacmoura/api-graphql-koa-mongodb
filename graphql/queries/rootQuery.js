const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const gadgetGraphQLType =  require('../gadgetType');
const Gadget = require('../../models/gadgets');
const queryAllGadgets = require('./queryAllGadgets');
const queryGadgetById = require('./queryGadgetById');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        queryGadgetById,
        queryAllGadgets
    }
})

module.exports = RootQuery;
const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType =  require('../types/gadgetType');
const Gadget = require('./../../models/gadgets');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Gadget.findByIdAndDelete(args.id).exec()
      .then(gadget => gadget.remove())
      .then(deletedGadget => deletedGadget)
      .catch(err => console.log(err))
  }
};
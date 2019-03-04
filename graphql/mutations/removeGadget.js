const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
    removeGadget: {
        type: gadgetGraphQLType,
        args: {
            id: { type:GraphQLString }
        },
        resolve(parent, args) {
            return Gadget.findOneAndDelete(args.id).exec()
                .then(gadget => gadget.remove())
                .then(deletedGadget => deletedGadget)
                .catch(err => console.log(err))
        }
    }
}
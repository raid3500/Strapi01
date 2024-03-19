module.exports = async (policyContext, config, { strapi }) => {

    console.log("Entered policy");

    console.log("policyContext.state.user.id: " + policyContext.state.user.id);

    if (!policyContext.state.user.id) return false;

    console.log("policyContext.params.id: " + policyContext.params.id);

    //const entry = await strapi.db.query['api::post.post'].findOne( {id: policyContext.params.id });
    const entry = await strapi.entityService.findOne('api::post.post', policyContext.params.id, {
      populate: { users_permissions_user: true },
    });

    console.log(entry);

    if(entry.users_permissions_user == null) return false;

    if(entry.users_permissions_user.id === policyContext.state.user.id) return true;

    return false;
};

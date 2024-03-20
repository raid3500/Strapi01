


module.exports = async (policyContext, config, { strapi }) => {

    console.log("Entered policy");

    console.log("policyContext.state.user.id: " + policyContext.state.user.id);

    if (!policyContext.state.user.id) return false;

    console.log("policyContext.params.id: " + policyContext.params.id);

    //const entry = await strapi.db.query['api::post.post'].findOne( {id: policyContext.params.id });
    const entry = await strapi.entityService.findOne('api::post.post', policyContext.params.id, {
      populate: { Owner: true },
    });

    console.log(entry);

    if(entry.Owner == null) return false;

    if(entry.Owner.id === policyContext.state.user.id) return true;

    return false;
};



/* module.exports = async (policyContext, config, { strapi }) => {

  const entry = await strapi.db.query('api::post.post').findOne( {id: policyContext.params.id, populate: { user: '*' } });

  console.log("policyContext.state.user");
  console.log(policyContext.state.user);
  console.log("policyContext.params:");
  console.log(policyContext.params);
  console.log("Post entity:");
  console.log(entry);

  return true;
}; */
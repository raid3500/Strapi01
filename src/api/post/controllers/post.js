'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', {

    async create(ctx) {
        const user = ctx.state.user;

        console.log(user);

        const task = await super.create(ctx);

        const updated = await strapi.entityService.update('api::post.post', task.data.id, {
            data: {
                Owner: user.id
            }
        });

        return updated;
    },

});

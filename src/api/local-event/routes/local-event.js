'use strict';

/**
 * local-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::local-event.local-event');

'use strict';

/**
 * local-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-event.local-event');

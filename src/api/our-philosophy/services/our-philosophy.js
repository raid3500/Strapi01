'use strict';

/**
 * our-philosophy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-philosophy.our-philosophy');

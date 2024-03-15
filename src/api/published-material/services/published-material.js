'use strict';

/**
 * published-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::published-material.published-material');

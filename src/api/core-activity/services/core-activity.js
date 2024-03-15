'use strict';

/**
 * core-activity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::core-activity.core-activity');

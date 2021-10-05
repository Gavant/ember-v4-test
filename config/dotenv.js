/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
    return {
        clientAllowedKeys: ['TEST_VAR'],
        fastbootAllowedKeys: ['TEST_VAR'],
        failOnMissingKey: false,
        path: path.join(path.dirname(__dirname), '.env')
    };
};

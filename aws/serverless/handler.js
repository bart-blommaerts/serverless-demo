'use strict';

// Your first function handler
module.exports.aws_hop = (event, context, cb) => cb(null,
  { message: 'Your function executed successfully!', event }
);

// You can add more handlers here, and reference them in serverless.yml

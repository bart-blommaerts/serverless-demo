'use strict';

module.exports.aws_hop = function(event, context, cb) {

  var start = new Date();

  var hops = event.body.hops;

  var lambda = {
      "provider": "AWS Lamba - Node.js",
      "start":  start,
      "temperature": event.body.hops[0].temperature,
      "stop": new Date()
    };

	hops.push(lambda);

    return cb(null,
    	{ 'hops': hops }
  );
};
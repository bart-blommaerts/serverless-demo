'use strict';

var doc = require('dynamodb-doc');
var uuid = require('node-uuid');

var dynamo = new doc.DynamoDB();

module.exports.aws_hop = function(event, context, cb) {
	var start = new Date();

	var hops = event.body.hops;

	var lambda = {
    	"provider": "AWS Lamba - Node.js",
    	"start":  start.toString(),
    	"temperature": hops[0].temperature,
    	"stop": new Date().toString()
    };
	hops.push(lambda);

	hops.id = uuid.v1();
	hops.updatedAt = new Date().getTime();

	var params = {
    	TableName: "hops",
    	Item: hops
    };

   // console.log(params);

	return dynamo.putItem(params, function (error, data) {
    	if (error) {
      		cb(error);
    	} else {
    		var newData = { 'hops' : params.Item };
    		cb(error, newData);
		} 
	});

};
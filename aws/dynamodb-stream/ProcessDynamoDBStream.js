console.log('Loading function');

exports.dynamo_hops = function(event, context, callback) {

	for (i = 0; i < 3; i++) { 
		console.log(event.Records[0].dynamodb.NewImage[i].M.provider.S);
		console.log(event.Records[0].dynamodb.NewImage[i].M.start.S);
		console.log(event.Records[0].dynamodb.NewImage[i].M.temperature.S); 
    	console.log(event.Records[0].dynamodb.NewImage[i].M.stop.S);
	}

    callback(null, "message");
};
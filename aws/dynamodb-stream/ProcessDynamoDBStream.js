console.log('Loading function');

exports.dynamo_hops = function(event, context, callback) {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record streamed: %j', record.dynamodb);
    });
    callback(null, "message");
};
# AWS Lambda to process a DynamoDB stream

Basic implementation to reconstruct the JSON from the DynamoDB stream.
To see the reconstructed values, open the AWS CloudWatch LogGroups and check the latest Streams for /aws/lambda/ProcessDynamoDBStream.

## Useful AWS commands

aws lambda create-function \
--region eu-west-1 \
--function-name ProcessDynamoDBStream \
--zip-file fileb://ProcessDynamoDBStream.js.zip \
--role "role" \
--handler ProcessDynamoDBStream.dynamo_hops \
--runtime nodejs4.3 \
--profile default

aws lambda update-function-code --function-name ProcessDynamoDBStream --zip-file fileb://ProcessDynamoDBStream.js.zip 

aws lambda invoke \
--invocation-type RequestResponse \
--function-name ProcessDynamoDBStream \
--region eu-west-1 \
--payload file://event.json \
--profile default \
outputfile.txt


aws lambda create-event-source-mapping \
--region eu-west-1 \
--function-name ProcessDynamoDBStream \
--event-source "role" \
--batch-size 100 \
--starting-position TRIM_HORIZON \
--profile default


aws lambda list-event-source-mappings \
--region eu-west-1 \
--function-name ProcessDynamoDBStream \
--event-source "role" \
--profile default
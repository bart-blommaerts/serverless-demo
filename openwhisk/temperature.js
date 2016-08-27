var request = require('request');

function main(params) {

  var start = new Date();

  var openwhisk = {
      "provider": "IBM OpenWhisk",
      "start":  start,
      "temperature": params.hops[0].temperature,
      "stop": new Date()
    };

  params.hops.push(openwhisk);

  var url = 'https://hp59okrew3.execute-api.eu-west-1.amazonaws.com/dev/aws/aws_hop';

      return new Promise(function(resolve, reject) {
          request.post(
          {
            headers: {'content-type' : 'application/json'},
            url:     url,
            body:    JSON.stringify(params)
          }, function(error, response, body) {
              if (error) {
                  reject(error);    
              }
              else {
                  resolve(JSON.parse(response.body));
              }
          });
      });
}
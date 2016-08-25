module.exports = 
 	function(context, req, res) {
 		var request = require('request');

    	var start = new Date();
		var temp = context.body.temp;

		var text = '{ "hops" : [{ "provider":"Auth 0 Webtask" , "start":"","temperature":"" , "stop":"" }]}';

		var json = JSON.parse(text);
		json.hops[0].start = start;
		json.hops[0].temperature = temp;
		json.hops[0].stop = new Date();

		request({
    		url: "https://openwhisk.ng.bluemix.net/api/v1/namespaces/Ordina_faas/actions/temperature?blocking=true",
    		method: "POST",
    		json: true,  
    		body: json,
    		headers: {
            	'Content-Type': 'application/json',
            	'Authorization': 'Basic apiKey'
        	}
		}, function (error, response, body){
	  		res.writeHead(200, { 
	  			'Content-Type': 'application/json',
	  		});
	  		res.end(JSON.stringify(response));
  		});
    }
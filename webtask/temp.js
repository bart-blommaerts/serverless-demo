module.exports = 
 	function(context, req, res) {
    	var start = new Date();
		var temp = context.body.temp;

  		res.writeHead(200, { 'Content-Type': 'application/json'});
  		res.end(JSON.stringify({
  			provider: "Auth 0 Webtask",
  			start: start,
  			temperature: temp,
  			stop: new Date()
  		} ));
    }
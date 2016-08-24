function main(params) {
	var start = new Date();

	var openwhisk = {
	    "provider": "IBM OpenWhisk",
	    "start":  start,
	    "temperature": params.hops[0].temperature,
	    "stop": new Date()
    };

	params.hops.push(openwhisk);

	return { params };
}
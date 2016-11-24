var express = require("express");
var app = express();

app.use(express.static("public"));

app.use(function(req, res, next){
	if(req.headers["x-forwarded-proto"] === "https"){
		res.redirect("http://"+req.hostname+req.url);
	}else{		
		next();
	}
});

app.get("/", function(request, response){
	response.send("Hello from the server!");
});

app.set("port", process.env.PORT||5000);

app.listen(app.get("port"), function(){
	console.log("Server started");
})
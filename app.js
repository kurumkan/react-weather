var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(request, response){
	response.send("Hello from the server!");
});

app.set("port", process.env.PORT||5000);

app.listen(app.get("port"), function(){
	console.log("Server started");
})
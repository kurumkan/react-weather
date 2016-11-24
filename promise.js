// function getTempWithCallback(location, callback){
// 	callback(undefined, 78);
// 	callback("City not found");
// }

// getTempWithCallback("Washington", function(err, temp){
// 	if(err){
// 		console.log("error",err);
// 	}else{
// 		console.log("success",temp);
// 	}	
// });



// function getTempWithPromise(location){
// 	return new Promise(function(resolve, reject){
// 		//if success
// 		//call it with some temp
// 		resolve(79);
// 		//if failure call reject with error message
// 		reject("City not found");
// 	});
// }

// getTempWithPromise("Washington").then(function(temp){
// 	console.log("promise success", temp);
// }, function(err){
// 	console.log("error", err);
// });


function IsNumeric(val) {
    return Number(parseFloat(val))==val;
}


function addPromise(a,b){
	return new Promise(function(resolve, reject){		
		if(a&&b&&IsNumeric(a)&&IsNumeric(b)){
			resolve(a+b);	
		}else{
			var errorMessage = "";
			if(!a||!b)
				errorMessage = "You should provide 2 arguments!";
			else
				errorMessage = "The argumest must be valid numbers!"; 
			reject(errorMessage);
		}
	});
}

addPromise(100, 12).then(function(res){
	console.log("success ", res);
}, function(err){
	console.log("error ", err);
});



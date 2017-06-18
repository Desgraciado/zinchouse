var express = require('express');
var app = express();

// Testing the jenkins server
app.get('/',function(req,res) {
	  res.send("Hello World!");
});

app.listen(4000);

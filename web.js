var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan());

app.configure(function() {
    app.use(express.static(__dirname));
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
      console.log("Listening on " + port);
});

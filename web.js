var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan());
app.use(express.static(__dirname));

var port = process.env.PORT ||process.env.VCAP_APP_PORT || 8080;
app.listen(port, function() {
      console.log("Listening on " + port);
});

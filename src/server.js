var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.port || 8080;


app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("../public"));

// Routes \\
app.use("/trading", require("./routes/tradingRoutes"));
app.use("/info", require("./routes/infoRoutes"));

mongoose.connect("mongodb://localhost/trading", function(){
    console.log("Data base is connected!!");
});



app.listen(port , function(){
    console.log("Server Is running on port" + port);
})


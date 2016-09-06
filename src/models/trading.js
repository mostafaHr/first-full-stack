var mongoose = require("mongoose");
var schema = mongoose.Schema;

var tradingSchema = new schema({
  item: {
        type: String,
        require: true
    },

    description: String,

    imageurl: String,
    owner: {
        type: schema.Types.ObjectId,
        ref: "info"
    },
    forsell: {
        type: Boolean,
        default: true
    },
    price : Number
});

module.exports = mongoose.model("tradig", tradingSchema);



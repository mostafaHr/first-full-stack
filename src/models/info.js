var mongoose = require("mongoose");
var schema = mongoose.Schema;

var infoSchema = new schema({
    FullName: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },

    PhoneNumber: String,

    Email: String,

    items: {
        type: schema.Types.ObjectId,
        ref: "trading"
    }
});

module.exports = mongoose.model("info", infoSchema);
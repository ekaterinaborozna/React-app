var mongoose = require('mongoose');

var Schema = mongoose.Schema
//БД
var PersonSchema = new Schema({
    postname: {
        type: String,
        requiered: true
    },
    postmessage: {
        type: String,
        max: 50
    }
})
mongoose.model('persons', PersonSchema);

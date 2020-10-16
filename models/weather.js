var mongoose = require('mongoose');

var weatherSchema = new mongoose.Schema(
    {
        month: {
            type: String,
            unique : true,
            required: true
        },
        data:{
            type: Number,
            unique:false,
            required:true
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model('weather',weatherSchema);
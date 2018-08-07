var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    member: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}, // name model
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}] // name model
}, {
        timestamps: true
    });

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
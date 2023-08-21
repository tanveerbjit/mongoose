const TransactionSchema = require('./schemas/TransactionSchema')
const mongoose = require("mongoose");


class TransactionModel extends TransactionSchema{

    constructor(){
        super();
        this.Transaction = mongoose.model("Transaction", this.transactionSchema);
    }

}


module.exports = new TransactionModel().Transaction ; 
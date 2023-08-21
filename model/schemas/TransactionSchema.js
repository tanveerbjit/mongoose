const mongoose = require('mongoose')


class TransactionSchema{
    constructor(){
        this.transactionSchema = new mongoose.Schema({
          account_id: Number,
          transaction_count: Number,
          bucket_start_date: Date,
          bucket_end_date: Date,
          transactions: [
            {
              date: Date,
              amount: Number,
              transaction_code: String,
              symbol: String,
              price: String,
              total: String,
            },
          ],
        });

        this.transactionSchema.methods.report = function() {
          console.log(
             "this is your document id: " + this._id +
            "this is your account_id: " + this.account_id 

          );
        };
    }

    
}

module.exports = TransactionSchema;
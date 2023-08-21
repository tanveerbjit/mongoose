const mongoose = require("mongoose")

class AccountSchema{

    constructor(){
        this.accountSchema = new mongoose.Schema({
          _id: mongoose.Schema.Types.ObjectId,
          account_id: Number,
          limit: Number,
          products: [String],
        });
    }
}


module.exports = AccountSchema;
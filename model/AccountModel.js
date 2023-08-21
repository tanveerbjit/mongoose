const AccountSchema = require("./schemas/AccountSchema");
const mongoose = require("mongoose");

class AccountModel extends AccountSchema{

    constructor(){
        super()
        this.Account = mongoose.model('accounts',this.accountSchema)
    }
}

module.exports = new AccountModel().Account;
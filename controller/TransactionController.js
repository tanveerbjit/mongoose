const mongoose = require("mongoose");
const Transaction = require("../model/TransactionModel");

class TransactionController {
  index() {}

  create() {}

  async store() {

    try {
      const newTransaction = new Transaction({ account_id: 8 }); // You can remove the transaction_id property
      await newTransaction.save();
      console.log("Saved transaction:", newTransaction);
      newTransaction.report();
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  
  }

  //"5ca4bbc1a2dd94ee58161cb1";
  async show(id) {
    try {
      const data = await Transaction.findById(id);
      console.log(data.account_id);
    } catch (err) {
      console.log(err);
    }
  }

  edit() {}

  update() {}

  destroy() {}
}


module.exports = new TransactionController();
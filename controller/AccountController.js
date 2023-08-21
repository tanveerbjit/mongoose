const mongoose = require("mongoose");
const Account = require("../model/AccountModel");

class AccountController {
  index() {}

  create() {}

  store() {}

  async show() {
    try {
      const data = await Account.find({
        _id: new mongoose.Types.ObjectId("5ca4bbc1a2dd94ee58161cb1"),
      });

      if (data.length > 0) {
        console.log("Limit:", data[0].limit);
      } else {
        console.log("No documents found.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  edit() {}

  update() {}

  destroy() {}
}

module.exports = new AccountController();

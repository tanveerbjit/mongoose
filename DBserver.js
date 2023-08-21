const mongoose = require("mongoose");
require("dotenv").config();


class DBServer{

    constructor(){
        this.dbName = process.env.DB;
        this.username = process.env.USER_NAME;
        this.password = process.env.PASSWORD;
        this.url = `mongodb+srv://${this.username}:${this.password}@cluster0.wnspbx2.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
        this.connect();
        
    }

    connect(){
        mongoose.connect(this.url);

        mongoose.connection.on("connected", () => {
          console.log(`Connected to database: ${this.dbName}`);
        });

    }
}

module.exports = new DBServer();
require("./DBserver")
const  transaction = require("./controller/TransactionController");


function route(){
// transaction.show("64e1cd2f0d7c9efb06f285b1");
 transaction.store();

}
route()



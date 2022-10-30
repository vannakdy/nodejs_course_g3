const express = require("express");
const db = require("./src/config/db");
const app = express();
const cors = require("cors")
var corsOptions = {
    origin: "*"
};
app.use(express.json())
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("")
});

require("./src/routes/student.route")(app)
require("./src/routes/customer.route")(app)
require("./src/routes/role.route")(app)
require("./src/routes/permission.route")(app)
require("./src/routes/user.route")(app)

app.listen(8080,()=>{
    console.log("server run on : localhost:8080")
})

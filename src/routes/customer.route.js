
const cutomerController = require("../controllers/customer.controller")
const {validateToken} = require("../controllers/user.controller")
const customer = (app) => {
    app.post("/api/customer/list",validateToken,cutomerController.getList)
    app.post("/api/customer/create",cutomerController.create)
    app.post("/api/customer/update",cutomerController.update)
    app.post("/api/customer/remove",cutomerController.remove)


    app.get("/api/customer",validateToken,cutomerController.getList);
    app.post("/api/customer",cutomerController.create)
    app.put("/api/customer",cutomerController.update)
    app.delete("/api/customer",cutomerController.remove)
}

module.exports = customer;
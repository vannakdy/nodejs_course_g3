
const permissionController = require("../controllers/permission.controller")
const permission = (app) => {
    app.get("/api/permission",permissionController.getList);
    app.post("/api/permission",permissionController.create)
    app.put("/api/permission",permissionController.update)
    app.delete("/api/permission",permissionController.remove)
}
module.exports = permission;
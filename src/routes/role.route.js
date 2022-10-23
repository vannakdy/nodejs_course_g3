
const roleController = require("../controllers/role.controller")
const role = (app) => {
    app.get("/api/role",roleController.getList);
    app.post("/api/role",roleController.create)
    app.put("/api/role",roleController.update)
    app.delete("/api/role",roleController.remove)
    app.post("/api/role/assignPermissionRole",roleController.assignPermissionRole)
}
module.exports = role;
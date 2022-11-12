
const userController = require("../controllers/user.controller")
const user = (app) => {
    app.get("/api/user",userController.getList);
    app.post("/api/user",userController.create);
    app.post("/api/user/login",userController.login);
    app.put("/api/user",userController.update);
    app.post("/api/user/refresh_token",userController.refreshToken);
    app.post("/api/user/assignrole",userController.assignrole);
}
module.exports = user;
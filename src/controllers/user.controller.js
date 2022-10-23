
const db = require("../config/db")

const getList = (req,res) => {
    db.query("SELECT * FROM user;",(err,result)=>{
        if(!err){
            res.json({
                list : result
            })
        }else{
            res.json({
                error : true,
                message : err
            })
        }
    })
}

const create = (req,res) => {
    // befor create user
    // - existing user
        // if has show message 
    // - valid email and tel
        // ajkdjfa@gamil.com
    // - password : 123456
        // bycrybt : "JDKEdjlkajojaijdfaiuoeoriu"
    
    var body = req.body;
    var message = {};
    if(body.username == "" || body.username == null){
        message["username"] = "Please fill in role username!";
    }
    if(body.password == "" || body.password == null){
        message["password"] = "Please fill in role password!";
    }
    if(body.tel == "" || body.tel == null){
        message["tel"] = "Please fill in role tel!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "INSERT INTO user (username,password,email,tel) VALUES (?,?,?,?)";
    db.query(sqlInsert,[body.username, body.password, body.email,body.tel ],(err,result)=>{
        if(!err){
            res.json({
                message : "Insert success!"
            })
        }else{
            res.json({
                error : true,
                message : err
            }) 
        }
    })
}

const update = (req,res) => {
    var body = req.body;
    var message = {};
    if(body.user_id == "" || body.user_id == null){
        message["user_id"] = "Role id required!";
    }
    if(body.username == "" || body.username == null){
        message["username"] = "Please fill in role username!";
    }
    if(body.password == "" || body.password == null){
        message["password"] = "Please fill in role password!";
    }
    if(body.tel == "" || body.tel == null){
        message["tel"] = "Please fill in role tel!";
    }
    if(body.status == "" || body.status == null){
        message["status"] = "Please fill in status!";
    }else if(body.status != 0 && body.status != 1){
        message["status"] = "Status must be 1 or 0";
    }

    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }

    var sqlInsert = "UPDATE user SET username = ?,password = ?, tel = ?, email = ?  WHERE user_id = ?";
    db.query(sqlInsert,[body.username, body.password, body.tel, body.email, body.user_id],(err,result)=>{
        if(!err){
            res.json({
                message : "Update success!"
            })
        }else{
            res.json({
                error : true,
                message : err
            }) 
        }
    })
}

const assignrole = (req,res) => {
    var body = req.body;
    var message = {};
    if(body.user_id == "" || body.user_id == null){
        message["user_id"] = "user_id required!";
    }
    if(body.role_id == "" || body.role_id == null){
        message["role_id"] = "Please fill in role role_id!";
    } 
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sql = "Insert into user_role (user_id,role_id) VALUES (?,?)";
    db.query(sql,[body.user_id,body.role_id],(err,resul)=>{
        if(!err){
            res.json({
                message : "Assign role success!"
            })
        }else{
            res.json({
                error : true,
                message : err
            }) 
        }
    })
}

module.exports = {
    getList,
    create,
    update,
    assignrole
}
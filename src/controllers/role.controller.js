
const db = require("../config/db")

const getList = (req,res) => {
    db.query("SELECT * FROM role;",(err,result)=>{
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
    var body = req.body;
    var message = {};
    if(body.name == "" || body.name == null){
        message["name"] = "Please fill in role name!";
    }
    if(body.code == "" || body.name == null){
        message["code"] = "Please fill in role code!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "INSERT INTO role (name,code) VALUES (?,?)";
    db.query(sqlInsert,[body.name, body.code],(err,result)=>{
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
    if(body.role_id == "" || body.role_id == null){
        message["role_id"] = "Role id required!";
    }
    if(body.name == "" || body.name == null){
        message["name"] = "Please fill in role name!";
    }
    if(body.code == "" || body.name == null){
        message["code"] = "Please fill in role code!";
    }
    if(body.status === "" || body.status == null){
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
    var sqlInsert = "UPDATE role SET name = ?,code = ?, status = ?  WHERE role_id = ?";
    db.query(sqlInsert,[body.name, body.code, body.status, body.role_id],(err,result)=>{
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
const remove = (req,res) => {
    var body = req.body;
    var message = {};
    if(body.role_id == "" || body.role_id == null){
        message["role_id"] = "Please fill in role_id!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "DELETE FROM role WHERE role_id = ?";
    db.query(sqlInsert,[body.role_id],(err,result)=>{
        if(!err){
            res.json({
                message : "Delete success!"
            })
        }else{
            res.json({
                error : true,
                message : err
            }) 
        }
    })
}

const assignPermissionRole = (req,res) => {
    var body = req.body;
    var message = {};
    if(body.permission_id == "" || body.permission_id == null){
        message["permission_id"] = "permission_id required!";
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
    var sql = "Insert into role_permission (role_id,permission_id) VALUES (?,?)";
    db.query(sql,[body.role_id,body.permission_id],(err,resul)=>{
        if(!err){
            res.json({
                message : "Assign permission to role success!"
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
    remove ,
    assignPermissionRole
}
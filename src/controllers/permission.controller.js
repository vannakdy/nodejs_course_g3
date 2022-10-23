
const db = require("../config/db")

const getList = (req,res) => {
    db.query("SELECT * FROM permission;",(err,result)=>{
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
        message["name"] = "Please fill in permission name!";
    }
    if(body.code == "" || body.name == null){
        message["code"] = "Please fill in permission code!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "INSERT INTO permission (name,code,description) VALUES (?,?,?)";
    db.query(sqlInsert,[body.name, body.code,body.description],(err,result)=>{
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
    if(body.permission_id == "" || body.permission_id == null){
        message["permission_id"] = "permission id required!";
    }
    if(body.name == "" || body.name == null){
        message["name"] = "Please fill in permission name!";
    }
    if(body.code == "" || body.name == null){
        message["code"] = "Please fill in permission code!";
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
    var sqlInsert = "UPDATE permission SET name = ?,code = ?, description = ?, status = ?  WHERE permission_id = ?";
    db.query(sqlInsert,[body.name, body.code,body.description, body.status, body.permission_id],(err,result)=>{
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
    if(body.permission_id == "" || body.permission_id == null){
        message["permission_id"] = "Please fill in permission_id!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "DELETE FROM permission WHERE permission_id = ?";
    db.query(sqlInsert,[body.permission_id],(err,result)=>{
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

module.exports = {
    getList,
    create,
    update,
    remove 
}
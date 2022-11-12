
const db = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret_access_token = "DJOEUOI#**+%*($40953080983409806093KLJEKnkdlkoiojl2JDLKe";
const secret_refresh_token = "ijrtjJDKELklkjl45898454985";

const validateToken = (req,res,next) => {
    var token = req.headers.authorization;
    if(token){
        token = token.split(" ")
        token = token[1]
        jwt.verify(token,secret_access_token,(err,objectInof)=>{
            if(!err){
                // res.json({
                //     message: "Incorrect token",
                //     user : objectInof.user
                // })
                req.user = objectInof.user;
                next();

            }else{
                res.json({
                    error: true,
                    message: err
                })
            }
        })
    }else{
        res.json({
            error: true,
            message: "Plaase fill in token!"
        })
    }
}

const refreshToken = (req,res) => {
    var refresh_token = req.body.refresh_token;
    if(refresh_token == "" || refresh_token == null){
        res.json({
            error:true,
            message:"Please fill in refresh toekn!"
        })
    }else{
        jwt.verify(refresh_token,secret_refresh_token,(err,objInfo)=>{
            if(!err){
                // provide new user info and token,refresh to client
                var access_token = jwt.sign({user:objInfo.user},secret_access_token,{expiresIn:60})
                var refresh_token = jwt.sign({user:objInfo.user},secret_refresh_token,{expiresIn:"1h"})
                res.json({
                    message : "login success!",
                    user : objInfo.user,
                    access_token : access_token,
                    refresh_token : refresh_token
                })
            }else{
                res.json({
                    error : true,
                    message:err
                })
            }
        })
    }
}

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
    var password = bcrypt.hashSync(body.password,10) // 123456 => JDKLEIOKSNLEKjkk398203808345980834590
    var sqlInsert = "INSERT INTO user (username,password,email,tel) VALUES (?,?,?,?)";
    db.query(sqlInsert,[body.username, password, body.email,body.tel ],(err,result)=>{
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

const login = (req,res) => {
    var body = req.body;
    var message = {};
    if(body.username == "" || body.username == null){
        message["username"] = "Please fill in  username!";
    }
    if(body.password == "" || body.password == null){
        message["password"] = "Please fill in  password!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    // check is existing user
    db.query("SELECT * , COUNT(user_id) as total FROM user WHERE username = ?",[body.username],(err,result)=>{
        var user = result
        if(!err){
            if(user[0].total != 0){
                user = user[0];
                // check is correct password
                if(bcrypt.compareSync(body.password,user.password)){
                    user.password = undefined;
                    // generate jwt token for client
                    var access_token = jwt.sign({user:user},secret_access_token,{expiresIn:60})
                    var refresh_token = jwt.sign({user:user},secret_refresh_token,{expiresIn:"1h"})
                    res.json({
                        message : "login success!",
                        user : user,
                        access_token : access_token,
                        refresh_token : refresh_token
                    })
                }else{
                    res.json({
                        error : true,
                        message : "Incorrect password!"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message : "User does not exist!"
                })
            }
           
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
    login,
    update,
    assignrole,
    validateToken,
    refreshToken
}
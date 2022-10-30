
const db = require("../config/db")
const getList = (req,res) => {

    db.query("SELECT * FROM customer;",(err,result)=>{
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
    // if(body.firstname == "" || body.firstname == null){
    //     res.json({
    //         error : true,
    //         message : "Please fill in firstname!"
    //     })
    //     return false;
    // }else if(body.lastname == "" || body.lastname == null){
    //     res.json({
    //         error : true,
    //         message : "Please fill in lastname!"
    //     })
    //     return false;
    // }
    var message = {};
    if(body.firstname == "" || body.firstname == null){
        message["firstname"] = "Please fill in firstname!";
    }
    if(body.lastname == "" || body.lastname == null){
        message["lastname"] = "Please fill in lastname!";
    }
    if(body.gender == ""){
        message["gender"] = "Please fill in gender!";
    }
    if(body.status == ""){
        message["status"] = "Please fill in status!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "INSERT INTO customer (firstname,lastname,gender,email,tel,status) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert,[body.firstname, body.lastname, body.gender, body.email, body.tel, body.status],(err,result)=>{
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
    if(body.customer_id == "" || body.customer_id == null){
        message["customer_id"] = "Please fill in customer_id!";
    }
    if(body.firstname == "" || body.firstname == null){
        message["firstname"] = "Please fill in firstname!";
    }
    if(body.lastname == "" || body.lastname == null){
        message["lastname"] = "Please fill in lastname!";
    }
    if(body.gender === ""){
        message["gender"] = "Please fill in gender!";
    }
    if(body.status === ""){
        message["status"] = "Please fill in status!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "UPDATE customer SET firstname = ?,lastname = ?, gender = ?, email = ?, tel = ?, status = ? WHERE customer_id = ?";
    db.query(sqlInsert,[body.firstname, body.lastname, body.gender, body.email, body.tel, body.status, body.customer_id],(err,result)=>{
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
    if(body.customer_id == "" || body.customer_id == null){
        message["customer_id"] = "Please fill in customer_id!";
    }
    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
        return false
    }
    var sqlInsert = "DELETE FROM customer WHERE customer_id = ?";
    db.query(sqlInsert,[body.customer_id],(err,result)=>{
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
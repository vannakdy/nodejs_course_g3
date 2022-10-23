
const db = require("../config/db");

const getList = (req,res) => {
    db.query("SELECT * FROM student WHERE student_id = "+req.params.id,(err,result)=>{
        if(err){
            res.json({
                error : true,
                message : err
            })
        }else{
            res.json({
                list_student : result
            })
        }
    })
}

const create = (req,res) => {
    res.send(">>>>> Create student")
}

module.exports = {
    getList,
    create
}
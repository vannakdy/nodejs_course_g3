
const db = require("../config/db")
const studentController = require("../controllers/student.controller")

const student = (app) =>{
    app.get("/api/student/list/:id",studentController.getList)
    app.get("/api/student/create",studentController.create)


    // app.get("/api/student/list",(req,res)=>{
    //     db.query("SELECT * FROM student",(err,result)=>{
    //         if(err){
    //             res.json({
    //                 error : true,
    //                 message : err
    //             })
    //         }else{
    //             res.json({
    //                 list_student : result
    //             })
    //         }
    //     })
    // })
    // app.get("/api/student/create",(req,res)=>{
    //     res.send("Create student")
    // })
}

module.exports = student;
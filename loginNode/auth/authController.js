const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const Admin = require('./userModel');
const Student = require('./studentModal');
const Teacher = require('./teacherModal');
const Hod = require('./hodModal');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())//post call

//get all Admin http://localhost:4000/api/auth/admin
router.get('/admin',(req, res) => {
    Admin.find({},(err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

//register Admin http://localhost:4000/api/auth/adminRegister
router.post('/adminRegister',(req, res) => {
    //encrypt Password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var registrationNumber =req.body.registrationNumber
    Admin.find({registrationNumber:registrationNumber},(err,data) => {
        if(data.length>0){
            // console.log(data)
             res.status(500).send({auth:false,token:'Registration Number Already Token'})
        }else{
            Admin.create({
                name: req.body.name,
                email: req.body.email,
                registrationNumber: req.body.registrationNumber,
                department: req.body.department,
                course: req.body.course,
                semester: req.body.semester,
                year: req.body.year,
                password:hashpassword,
                subject: req.body.subject,
                role:"admin"
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
})

//login Admin http://localhost:4000/api/auth/adminLogin
router.post('/adminLogin',(req, res) => {
    Admin.findOne({registrationNumber:req.body.registrationNumber},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Error while login'});
        console.log(user)
        if(!user) return res.status(500).send({auth:false,token:'No user found'});
        else{
            //compare password
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid password'});
           
            // in case password is valid
                var token = jwt.sign({id:user._id},config.secret, {expiresIn:86400}) //24 hr
                res.send({role:user.role, auth:true,token:token})
                           
        }
    })
})







//get all student http://localhost:4000/api/auth/student
router.get('/student',(req, res) => {
    Student.find({},(err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

//register student  http://localhost:4000/api/auth/studentRegister
router.post('/studentRegister',(req, res) => {
    //encrypt Password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var registrationNumber =req.body.registrationNumber
    Student.find({registrationNumber:registrationNumber},(err,data) => {
        if(data.length>0){
            // console.log(data)
             res.status(500).send({auth:false,token:'Registration Number Already Token'})
        }else{
            Student.create({
                name: req.body.name,
                email: req.body.email,
                registrationNumber: req.body.registrationNumber,
                department: req.body.department,
                course: req.body.course,
                semester: req.body.semester,
                year: req.body.year,
                password:hashpassword,
                role:'Student'
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
})

//login student http://localhost:4000/api/auth/studentLogin
router.post('/studentLogin',(req, res) => {
    Student.findOne({registrationNumber:req.body.registrationNumber},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Error while login'});
        if(!user) return res.status(500).send({auth:false,token:'No Student found'});
        else{
            //compare password
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid password'});
           
            // in case password is valid
                var token = jwt.sign({id:user._id},config.secret, {expiresIn:86400}) //24 hr
                res.send({role:user.role, auth:true,token:token})
                           
        }
    })
})

// update student details
router.put('/updateStudent/:id',(req,res) => {
    // var _id = Number(req.params.id);
    Student.updateOne(
        {_id:req.params.id},            
        { $set:{
            name: req.body.name,
            email: req.body.email,
            registrationNumber: req.body.registrationNumber,
            // department: req.body.department,
            course: req.body.course,
            semester: req.body.semester,
            year: req.body.year,
        }},(err,data) => {
            if (err) return res.status(500).send('error while update')
            res.status(200).send('Updated Successful')
        }
    )
        
})



//get all teachers http://localhost:4000/api/auth/teacher
router.get('/teacher',(req, res) => {
    Teacher.find({},(err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

//register Teacher  http://localhost:4000/api/auth/teacherRegister
router.post('/teacherRegister',(req, res) => {
    //encrypt Password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var registrationNumber =req.body.registrationNumber
    Teacher.find({registrationNumber:registrationNumber},(err,data) => {
        if(data.length>0){
            // console.log(data)
             res.status(500).send({auth:false,token:'Registration Number Already Token'})
        }else{
            Teacher.create({
                name: req.body.name,
                email: req.body.email,
                registrationNumber: req.body.registrationNumber,
                department: req.body.department,
                course: req.body.course,
                subject: req.body.subject,
                password:hashpassword,
                role:'Teacher'
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
})

//login Teacher http://localhost:4000/api/auth/teacherLogin
router.post('/teacherLogin',(req, res) => {
    Teacher.findOne({registrationNumber:req.body.registrationNumber},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Error while login'});
        if(!user) return res.status(500).send({auth:false,token:'No Teacher found'});
        else{
            //compare password
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid password'});
           
            // in case password is valid
                var token = jwt.sign({id:user._id},config.secret, {expiresIn:86400}) //24 hr
                res.send({role:user.role,auth:true,token:token})
                           
        }
    })
})

//get all Hod http://localhost:4000/api/auth/hod
router.get('/hod',(req, res) => {
    Hod.find({},(err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

//register Hod  http://localhost:4000/api/auth/hodRegister
router.post('/hodRegister',(req, res) => {
    //encrypt Password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var registrationNumber =req.body.registrationNumber
    Hod.find({registrationNumber:registrationNumber},(err,data) => {
        if(data.length>0){
            // console.log(data)
             res.status(500).send({auth:false,token:'Registration Number Already Token'})
        }else{
            Hod.create({
                name: req.body.name,
                email: req.body.email,
                registrationNumber: req.body.registrationNumber,
                department: req.body.department,
                password:hashpassword,
                role:'HOD'
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
})

//login hod http://localhost:4000/api/auth/hodLogin
router.post('/hodLogin',(req, res) => {
    Hod.findOne({registrationNumber:req.body.registrationNumber},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Error while login'});
        if(!user) return res.status(500).send({auth:false,token:'No HOD found'});
        else{
            //compare password
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid password'});
           
            // in case password is valid
                var token = jwt.sign({id:user._id},config.secret, {expiresIn:86400}) //24 hr
                res.send({role:user.role, auth:true,token:token})
                           
        }
    })
})


//Admin Profile  http://localhost:4000/api/auth/adminInfo
router.get('/adminInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        Admin.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})


//Student Profile  http://localhost:4000/api/auth/studentInfo
router.get('/studentInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        Student.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})

//Teacher Profile  http://localhost:4000/api/auth/teacherInfo
router.get('/teacherInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        Teacher.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})

//HOD Profile  http://localhost:4000/api/auth/hodInfo
router.get('/hodInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        Hod.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})

module.exports = router;
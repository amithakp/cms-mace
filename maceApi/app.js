var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
dotenv.config();
var mongoUrl = "mongodb+srv://test:test@cluster0.vkjly.mongodb.net/mace?retryWrites=true&w=majority";
var cors = require('cors')
const bodyParser = require('body-parser')
var port = process.env.PORT || 8024;
//save db connection
var db;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res) => {
    res.send("Hiii From Express..")
})

//get department details
app.get('/department',(req,res) => {
    db.collection('department').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//get bus details
app.get('/bus',(req,res) => {
    db.collection('bus').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//get meet details
app.get('/meet',(req,res) => {
    db.collection('meet').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
//get timetable details
app.get('/timetable',(req,res) => {
   res.download("./Rectangle 25.png")
})

// update reliefCentre details
app.put('/hod',(req,res) => {
    // var id = Number(req.body.disaster_reliefCenterid);
    db.collection('hod').updateOne(
        // {id:disaster_reliefCenterid},
            {
                $set:{
                    name:req.body.name,
                    email:req.body.email,
                    department:req.body.department
                }
            })
    
        res.send('Updated Successful')
    })
    
// connecting with mongodb
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('mace');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})
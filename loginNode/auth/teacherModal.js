var mongooseTeacher = require('mongoose');

var teacherschema = new mongooseTeacher.Schema({
    name:'String',
    email:'String',
    registrationNumber:'String',
    department:'String',
    course:'String',
    semester:'String',
    year:'String',
    subject:'String',
    password:'String',
    role:'String'
})

mongooseTeacher.model('Teacher', teacherschema);
module.exports = mongooseTeacher.model('Teacher')
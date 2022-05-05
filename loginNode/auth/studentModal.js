var mongooseStudent = require('mongoose');

var studentschema = new mongooseStudent.Schema({
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

mongooseStudent.model('Student', studentschema);
module.exports = mongooseStudent.model('Student')
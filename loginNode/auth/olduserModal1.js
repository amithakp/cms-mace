var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
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

mongoose.model('Admin', userschema);
module.exports = mongoose.model('Admin')

mongoose.model('Student', userschema);
module.exports = mongoose.model('Student')

mongoose.model('Teacher', userschema);
module.exports = mongoose.model('Teacher')

mongoose.model('HOD', userschema);
module.exports = mongoose.model('HOD')
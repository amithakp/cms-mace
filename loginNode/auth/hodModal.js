var mongooseHod = require('mongoose');

var hodschema = new mongooseHod.Schema({
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

mongooseHod.model('Hod', hodschema);
module.exports = mongooseHod.model('Hod')
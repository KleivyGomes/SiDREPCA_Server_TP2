const courseMiddleware = require('./courseMiddleware')
const departmentMiddleware = require('./departmentMiddleware')
const firmMiddleware = require('./firmMiddleware')
const informationMiddleware = require('./informationMiddleware')
const internshipMiddleware = require('./internshipMiddleware')
const sciMiddleware = require('./sciMiddleware')
const studentMiddleware = require('./studentMiddleware')
const tokenMiddleware = require('./tokenMiddleware')

export function middle(){
    courseMiddleware,
    departmentMiddleware,
    firmMiddleware,
    informationMiddleware,
    internshipMiddleware,
    sciMiddleware,
    studentMiddleware,
    tokenMiddleware
}
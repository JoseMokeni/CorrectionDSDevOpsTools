const request = require('supertest')
const app = require('../app')

it('should respond with a 201 created status code', (done) => {
    request(app)
    .post('/tasks')
    .send({task : "Cook"})
    .expect(201, {message: "Task added successfully"}, done)
})


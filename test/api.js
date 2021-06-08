process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../api')

chai.use(chaiHttp)

const { expect, request } = chai

describe('API', () => {
    it('should get uptime from server', (done) => {
        request(app).get('/').end((e, res) => {
            expect(e).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.include.all.keys('uptime')
            expect(res.body.uptime).to.be.a('number')
            done()
        })
    })
})
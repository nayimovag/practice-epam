const calc = require('../app.js')
const assert = require('assert')

describe('calculator test', function(){
    it('addition of two numbers', function(){
        let total = calc.add(4,5)
        assert.equal(total, 9)
    })
    it('multiplication of two numbers', function(){
        let total = calc.multiply(4,5)
        assert.equal(total, 20)
    })
})
const calc = require('../app.js')
const assert = require('assert')
const {expect} = require('chai')

describe('calculator test', function(){
    describe('positive test', function(){
        it('addition of two numbers', function(){
            let total = calc.add(4,5)
            assert.equal(total, 9)
        })
        it('multiplication of two numbers', function(){
            let total = calc.multiply(4,5)
            assert.equal(total, 20)
        })
    })
    describe('negative tests', function(){
        it('negative test with addition', function(){
            //didnt work with assert
            // assert.throws(calc.add('a', false), 'Please enter numbers only')
            expect(() => {
                calc.add('a', false)
               }).to.throw(Error, 'Please enter numbers only')
        })
        it('negative test with multiplication', function(){
            //didnt work with assert
            //assert.throws(calc.multiply(true, 'hello'), 'Please enter numbers only')
            expect(() => {
                calc.multiply(true, 'hello')
               }).to.throw(Error, 'Please enter numbers only')
        })
    })
})
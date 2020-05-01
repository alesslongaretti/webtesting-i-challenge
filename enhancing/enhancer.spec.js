const {succeed, fail, repair} = require('./enhancer.js');
// test away!

describe('testing enhancer', () => {
    describe('repair()', () => {
        it('should return 100 for durability', () => {
            expect(repair({ name: 'alessandra', durability: 10, enhancement: 10})).toEqual({ name: 'alessandra', durability: 100, enhancement: 10})

        })
    })
    describe('succeed()', () => {
        it('should increase enhancement by 1 if it is less than 20', () => {
            expect(succeed({ name: 'alessandra', durability: 10, enhancement:20})).toEqual({name: 'alessandra', durability: 10, enhancement:20});
            expect(succeed({ name: 'alessandra', durability: 11, enhancement:19})).toEqual({ name: 'alessandra', durability: 11, enhancement:20})
        })
    })
})
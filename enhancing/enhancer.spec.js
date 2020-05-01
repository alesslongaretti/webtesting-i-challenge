const {succeed, fail, repair} = require('./enhancer.js');
// test away!

describe('testing enhancer', () => {
    describe('repair()', () => {
        it('should return 100 for durability', () => {
            expect(repair({ name: 'alessandra', durability: 10, enhancement: 10})).toEqual({ name: 'alessandra', durability: 100, enhancement: 10})

        })
    })
    describe('succeed()', () => {
        it('', )
    })
})
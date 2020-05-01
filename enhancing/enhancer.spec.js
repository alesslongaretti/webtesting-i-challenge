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
    describe('fail()', () => {
        it('if the items enhancement is less than 15, durability of item is decreased by 5', () => {
            expect(fail({name: 'alessandra', durability:50, enhancement:14})).toEqual({name: 'alessandra', durability:45, enhancement:14})
        })
        it('if the items enhancement is 15 or more, durability is decreased by 10', () => {
            expect(fail({enhancement:15, durability:50 })).toEqual({ enhancement: 15,durability:40})

        })
        it('if the items level is greater than 16, the enhancement decreases by 1', () => {
            expect(fail({name: 'alessandra',durability:20, enhancement:17})).toEqual({name: 'alessandra',durability:10, enhancement:16})
        })
    })
})
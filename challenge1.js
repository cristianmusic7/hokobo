const {describe, expect, it} = require('./testUtils');

sum_35 = (num) => {
    let sum = 0;
    //check all the numbers smaller than the argument
    for (let i = 1; i < num; i++) {
        //check if they are multiples of 3 or 5
        if (!(i % 3) || !(i % 5))
            sum += i;
    }
    return sum;
}

describe('sum_35', () => {
    it('10 =>', () => {
        const result = sum_35(10);
        expect(result).toBe(23);
    });
    it('11 =>', () => {
        const result = sum_35(11);
        expect(result).toBe(33);
    });
    it('30 =>', () => {
        const result = sum_35(30);
        expect(result).toBe(195);
    });
});

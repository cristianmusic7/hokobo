const {describe, expect, it} = require('./testUtils');

digital_root = (num) => {
    //if the number has just one digit return
    if (num < 10)
        return num;

    let sum = 0;
    //sum digits
    while (num > 0)
    {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    //go to recursion
    return digital_root(sum);
}


describe('digital_root', () => {
    it('942 =>', () => {
        const result = digital_root(942);
        expect(result).toBe(6);
    });
    it('111 =>', () => {
        const result = digital_root(111);
        expect(result).toBe(3);
    });
    it('12345 =>', () => {
        const result = digital_root(12345);
        expect(result).toBe(6);
    });
});
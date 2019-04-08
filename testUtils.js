arraysEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

const describe = (desc, fn) => {
    console.log(desc)
    fn()
}
  
const it = (msg, fn) => describe(msg, fn)
  
const matchers = (res) => ({
    toBe: (exp) => {
        console.log('result: ', res,', exp: ', exp);
        if (Array.isArray(exp)) {            
            console.log(arraysEqual(res,exp) ? 'pass':'fail');
            return arraysEqual(res,exp);
        }
        else{
            console.log((res === exp) ? 'pass':'fail');
            return (res === exp);
        }
        
    }
})
  
const expect = (res) => matchers(res);
  
module.exports = {
    describe,
    expect,
    it
}
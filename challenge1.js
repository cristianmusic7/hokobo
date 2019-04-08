sum35 = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (!(i % 3) || !(i % 5))
            sum += i;
    }
    return sum;
}

console.log(sum35(10));
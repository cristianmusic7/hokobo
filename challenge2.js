digital_root = (num) => {
    if (num < 10)
        return num;

    console.log("intermediary: ", num);

    let sum = 0;
    while (num > 0)
    {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return digital_root(sum);
}

console.log(digital_root(9435465456456465454549));
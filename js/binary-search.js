let arr = [];

for(let i = 0; i <= 240000; i++) {
    arr.push(i);
}

const simpleSearch = (search, arr) => {
    let counter = 0;

    for (let i = 0; i <= arr.length; i++) {
        counter++;

        if (arr[i] === search) {
            return {
                result: arr[i],
                log: 'simpleSearch. Количество итераций = ' + counter,
            }
        }
    }
}

const binarySearch = (search, arr) => {
    let min = 0;
    let max = arr.length - 1;
    let counter = 0

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let current = arr[middle];
        counter++;

        if (current === search) {
            return {
                result: current,
                log: 'binarySearch. Количество итераций = ' + counter,
            }
        }

        if (current > search) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }
}


console.log(simpleSearch(121943, arr)); // 121944 итераций
console.log(binarySearch(121943, arr)); // 16 итераций
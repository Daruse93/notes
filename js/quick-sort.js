const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const select = arr[0];

    let less = [];
    let greater = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < select
            ? less.push(arr[i])
            : greater.push(arr[i]);
    }

    return [
        ...quickSort(less),
        select,
        ...quickSort(greater)
    ]
}

const unsorted = [11, 32, 4, 17, 56, 65, 3, 85];
const result = quickSort(unsorted);

console.log(result); // [3, 4, 11, 17, 32, 56, 65, 85]

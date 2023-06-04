function sum(arr, start, end) {

    let sum = 0
    if (!Array.isArray(arr)) {
        return NaN
    }
    if (start < 0) {
        start = 0;
    }
    if (end >= arr.length) {
        end = arr.length - 1;
    }
    for (let i = start; i <= end; i++) {

        let current = Number(arr[i]);
        sum += current

    }
    return sum
}

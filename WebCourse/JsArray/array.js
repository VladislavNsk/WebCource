(function () {
    var numbers = [5, 9, 7, 1, -5, 0, 88, 325, -40, 79, 66, -73, 5];

    function sortArray(array) {
        array.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirst5Items(array) {
        return array.slice(0, 5);
    }

    function getLast5Items(array) {
        return array.slice(numbers.length - 5);
    }

    function getEvenNumbersSum(array) {
        return array
            .filter(function (item) {
                return item % 2 === 0;
            })
            .reduce(function (sum, item) {
                return sum + item;
            }, 0);
    }

    sortArray(numbers);
    console.log("Отсортированный массив по убыванию: ", numbers);

    var first5Items = getFirst5Items(numbers);
    console.log("Первые пять элементов массива: ", first5Items);

    var last5Items = getLast5Items(numbers);
    console.log("Последние пять элементов массива: ", last5Items);

    var evenNumbersSum = getEvenNumbersSum(numbers);
    console.log("Сумма четных чисел массива: ", evenNumbersSum);
})();

(function () {
    function createArray() {
        var baseArray = [];

        for (var i = 1; i <= 100; i++) {
            baseArray.push(i);
        }

        return baseArray;
    }

    var numbersArray = createArray();
    console.log("Массив из 100 чисел: ", numbersArray);

    function getEvenNumbersSquares(array) {
        return array
            .filter(function (item) {
                return item % 2 === 0;
            })
            .map(function (item) {
                return Math.pow(item, 2);
            });
    }

    var evenNumbersSquares = getEvenNumbersSquares(numbersArray);
    console.log("Массив квадратов четных чисел: ", evenNumbersSquares);
})();
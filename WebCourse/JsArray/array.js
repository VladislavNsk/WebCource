(function () {
    var numbers = [5, 9, 7, 1, -5, 0, 88, 325, -40, 79, 66, -73, 5];

    function sortArray() {
        numbers.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirst5Items() {
        return numbers.slice(0, 5);
    }

    function getLast5Items() {
        return numbers.slice(numbers.length - 5);
    }

    function getEvenNumbersSum() {
        return numbers
            .filter(function (item) {
                return item % 2 === 0;
            })
            .reduce(function (sum, item) {
                return sum + item;
            }, 0);
    }

    sortArray();
    console.log("Отсортированный массив по убыванию: ", numbers);

    var first5Items = getFirst5Items();
    console.log("Первые пять элементов массива: ", first5Items);

    var last5Items = getLast5Items();
    console.log("Последние пять элементов массива: ", last5Items);

    var evenNumbersSum = getEvenNumbersSum();
    console.log("Сумма четных чисел массива: ", evenNumbersSum);
})();

(function () {
    function createArray() {
        var baseArray = [];

        for (var i = 0; i < 100; i++) {
            baseArray.push(i + 1);
        }

        return baseArray;
    }

    var array = createArray();
    console.log("Массив из 100 чисел: ", array);

    function getEvenSquaresNumbers() {
        return array
            .filter(function (item) {
                return item % 2 === 0;
            })
            .map(function (item) {
                return Math.pow(item, 2);
            });
    }

    var evenSquaresNumbers = getEvenSquaresNumbers();
    console.log("Массив квадратов четных чисел: ", evenSquaresNumbers);
})();
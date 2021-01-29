(function () {
    var numbers = [5, 9, 7, 1, -5, 0, 88, 325, -40, 79, 66, -73, 5];

    function sortArray(array) {
        array.sort((a, b) => a - b);
        console.log("Отсортированный массив: ", numbers);
    }

    function printFirst5Items(array) {
        var first5Items = array.slice(0, 5);
        console.log("Первые пять элементов массива: ", first5Items);
    }

    function printLast5Items(array) {
        var last5Items = array.slice(numbers.length - 5);
        console.log("Последние пять элементов массива: ", last5Items);
    }

    function printEvenNumbersSum(array) {
        var evenNumbersSum = array.filter(x => x % 2 === 0).reduce((sum, item) => sum + item);
        console.log("Сумма четных чисел массива: ", evenNumbersSum);
    }

    sortArray(numbers);
    printFirst5Items(numbers);
    printLast5Items(numbers);
    printEvenNumbersSum(numbers);
})();


(function () {
    var baseArray;

    function createArray() {
        baseArray = new Array(100);

        for (var i = 0; i < baseArray.length; i++) {
            baseArray[i] = i + 1;
        }

        console.log("Массив из 100 чисел: ", baseArray);
    }

    function getEvenSquaresNumbers(array) {
        return array.filter(item => item % 2 === 0).map(item => Math.pow(item, 2));
    }

    createArray();

    var evenSquaresNumbers = getEvenSquaresNumbers(baseArray);
    console.log("Массив квадратов четных чисел: ", evenSquaresNumbers);
})();



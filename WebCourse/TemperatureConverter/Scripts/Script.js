"use strict";

var TemperatureConverter = TemperatureConverter || {};

TemperatureConverter.ConvertToFarengeit = function (celsius) {
    return (celsius * 9 / 5) + 32;
};

TemperatureConverter.ConvertToKelvin = function (celsius) {
    return celsius + 273.15;
};

TemperatureConverter.Celsius = document.getElementById("celcius");
TemperatureConverter.Kelvin = document.getElementById("kelvin");
TemperatureConverter.Farengeit = document.getElementById("farengeit");

TemperatureConverter.PrintError = function (message) {
    this.ClearError();

    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.style.width = TemperatureConverter.Celsius.offsetWidth + "px";
    messageElement.classList.add("error");
    TemperatureConverter.Celsius.parentElement.appendChild(messageElement);
};

TemperatureConverter.ClearError = function() {
    var errors = document.getElementsByClassName("error");

    if (errors.length !== 0) {
        errors[0].remove();
    }
};

(function () {
    function convert() {
        if (isNaN(TemperatureConverter.Celsius.value)) {
            TemperatureConverter.PrintError("Введены не корректные значения");

            return;
        }

        if (TemperatureConverter.Celsius.value.length === 0) {
            TemperatureConverter.PrintError("Введите градусы");

            return;
        }

        TemperatureConverter.ClearError();
        TemperatureConverter.Kelvin.value = TemperatureConverter.ConvertToKelvin(+TemperatureConverter.Celsius.value);
        TemperatureConverter.Farengeit.value = TemperatureConverter.ConvertToFarengeit(+TemperatureConverter.Celsius.value);
    }

    document.getElementById("button").addEventListener("click", convert);
})();






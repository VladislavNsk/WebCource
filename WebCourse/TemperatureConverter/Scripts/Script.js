"use strict";

function ready() {
    var TemperatureConverter = TemperatureConverter || {};

    TemperatureConverter.convertToFahrenheit = function (celsius) {
        return ((celsius * 9 / 5) + 32).toFixed(1);
    };

    TemperatureConverter.convertToKelvin = function (celsius) {
        return (celsius + 273.15).toFixed(1);
    };

    TemperatureConverter.celsius = document.getElementById("celsius");
    TemperatureConverter.kelvin = document.getElementById("kelvin");
    TemperatureConverter.fahrenheit = document.getElementById("fahrenheit");

    TemperatureConverter.printError = function (message) {
        this.clearError();

        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.width = TemperatureConverter.celsius.offsetWidth + "px";
        messageElement.classList.add("error");
        TemperatureConverter.celsius.parentElement.appendChild(messageElement);
    };

    TemperatureConverter.clearError = function () {
        var errors = document.getElementsByClassName("error");

        if (errors.length !== 0) {
            errors[0].remove();
        }
    };

    (function () {
        function convert() {
            if (isNaN(TemperatureConverter.celsius.value)) {
                TemperatureConverter.printError("Введены не корректные значения");

                return;
            }

            if (TemperatureConverter.celsius.value.length === 0) {
                TemperatureConverter.printError("Введите градусы");
                return;
            }

            TemperatureConverter.clearError();
            TemperatureConverter.kelvin.value = TemperatureConverter.convertToKelvin(+TemperatureConverter.celsius.value);
            TemperatureConverter.fahrenheit.value = TemperatureConverter.convertToFahrenheit(+TemperatureConverter.celsius.value);
        }

        document.getElementById("button").addEventListener("click", convert);
    })();
}

document.addEventListener("DOMContentLoaded", ready);
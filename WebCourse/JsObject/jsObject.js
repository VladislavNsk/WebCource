"use strict";

(function () {
    var countries = [
        {
            country: "Германия",
            cities: [
                {
                    city: "Берлин",
                    population: 3769000
                },
                {
                    city: "Мюнхен",
                    population: 1472000
                },
                {
                    city: "Гамбург",
                    population: 1845000
                },
                {
                    city: "Кёльн",
                    population: 1061000
                }
            ]
        },
        {
            country: "Польша",
            cities: [
                {
                    city: "Варшава",
                    population: 1708000
                },
                {
                    city: "Краков",
                    population: 779115
                },
                {
                    city: "Гдальск",
                    population: 585000
                },
                {
                    city: "Врослав",
                    population: 650000
                }
            ]
        },
        {
            country: "Russia",
            cities: [
                {
                    city: "Новосибирск",
                    population: 1511000
                },
                {
                    city: "Москва",
                    population: 11920000
                },
                {
                    city: "Томск",
                    population: 550000
                }
            ]
        }
    ];

    countries.forEach(function (item) {
        console.log(item);
    });

    function getCountriesWithMaxCitiesCount() {
        return countries
            .sort(function (a, b) {
                return a.cities.length + b.cities.length;
            })
            .filter(function (item) {
                return item.cities.length === countries[0].cities.length;
            });
    }

    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount();
    console.log("Страна/страны с максимальным числом городов:", countriesWithMaxCitiesCount);

    function getCountriesInfo() {
        var tempCountriesInfo = {};

        countriesWithMaxCitiesCount.forEach(function (item) {

            tempCountriesInfo[item.country] = item.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        });

        return tempCountriesInfo;
    }

    var countriesInfo = getCountriesInfo();
    console.log(countriesInfo);
})();
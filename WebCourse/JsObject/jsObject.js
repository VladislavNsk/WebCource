"use strict";

(function () {
    var countries = [
        {
            name: "Германия",
            cities: [
                {
                    name: "Берлин",
                    population: 3769000
                },
                {
                    name: "Мюнхен",
                    population: 1472000
                },
                {
                    name: "Гамбург",
                    population: 1845000
                },
                {
                    name: "Кёльн",
                    population: 1061000
                }
            ]
        },
        {
            name: "Польша",
            cities: [
                {
                    name: "Варшава",
                    population: 1708000
                },
                {
                    name: "Краков",
                    population: 779115
                },
                {
                    name: "Гдальск",
                    population: 585000
                },
                {
                    name: "Врослав",
                    population: 650000
                }
            ]
        },
        {
            name: "Russia",
            cities: [
                {
                    name: "Новосибирск",
                    population: 1511000
                },
                {
                    name: "Москва",
                    population: 11920000
                },
                {
                    name: "Томск",
                    population: 550000
                }
            ]
        }
    ];

    countries.forEach(function (country) {
        console.log(country);
    });

    function getCountriesWithMaxCitiesCount(countriesArray) {
        var maxCitiesCount = countriesArray.reduce(function (result, country) {
            if (country.cities.count > result.cities.count) {
                result = country;
            }

            return result;
        }).cities.length;

        return countriesArray.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countries);
    console.log("Страна/страны с максимальным числом городов:", countriesWithMaxCitiesCount);

    function getCountriesInfo(countriesArray) {
        var tempCountriesInfo = {};

        countriesArray.forEach(function (country) {
            tempCountriesInfo[country.name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        });

        return tempCountriesInfo;
    }

    var countriesInfo = getCountriesInfo(countries);
    console.log(countriesInfo);
})();
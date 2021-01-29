"use strict";

(function () {
    function City(name, population) {
        this.name = name;
        this.population = population;
    }

    function Country(name) {
        this.name = name;
        this.cities = [];
    }

    var russia = new Country("Россия");
    russia.cities = [
        new City("Новосибирск", 1511000),
        new City("Москва", 11920000),
        new City("Томск", 550000)
    ];

    var germany = new Country("Германия");
    germany.cities = [
        new City("Берлин", 3769000),
        new City("Мюнхен", 1472000),
        new City("Гамбург", 1845000),
        new City("Кёльн", 1061000)
    ];

    var poland = new Country("Польша");
    poland.cities = [
        new City("Варшава", 1708000),
        new City("Краков", 779115),
        new City("Гдальск", 585000),
        new City("Врослав", 650000)
    ];

    var countries = [
        russia,
        germany,
        poland
    ];

    countries.forEach(x => console.log(x));
    printCountriesWithMaxCitiesCount();

    function printCountriesWithMaxCitiesCount() {

        var countriesWithMaxCitiesCount = [];

        countries.forEach(item => {
            if (countriesWithMaxCitiesCount.length === 0) {
                countriesWithMaxCitiesCount.push(item);
            } else if (countriesWithMaxCitiesCount[0].cities.length === item.cities.length) {
                countriesWithMaxCitiesCount.push(item);
            } else if (countriesWithMaxCitiesCount[0].cities.length < item.cities.length) {
                countriesWithMaxCitiesCount = [item];
            }
        });

        console.log("Страна/страны с максимальным числом городов:", countriesWithMaxCitiesCount);
    }

    var countriesInfo = getCountriesInfo();
    console.log(countriesInfo);

    function getCountriesInfo() {
        var tempCountriesInfo = {};

        for (var country in countries) {
            if (Object.prototype.hasOwnProperty.call(countries, country)) {
                tempCountriesInfo[countries[country].name] = countries[country].cities.
                    map(city => city.population).
                    reduce((sum, population) => sum + population);
            }
        }

        return tempCountriesInfo;
    }
})();
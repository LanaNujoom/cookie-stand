'use strict';

var hoursArr = ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"],

function getRandomCustomersNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}


var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    location: "Seattle",
    resultPerHourArr: [],

    getAvgcookiesPerHour: function () {


        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust)
            var totalPerHour = result * this.avgCookieSale,
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour
        }
    }
};




var tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    location: "tokyo",
    resultPerHourArr: [],

    getAvgcookiesPerHour: function () {


        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust)
            var totalPerHour = result * this.avgCookieSale,
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour
        }
    }
};


var dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    location: "dubai",
    resultPerHourArr: [],

    getAvgcookiesPerHour: function () {


        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust)
            var totalPerHour = result * this.avgCookieSale,
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour
        }
    }
};


var paris = {
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    location: "paris",
    resultPerHourArr: [],

    getAvgcookiesPerHour: function () {

        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust)
            var totalPerHour = result * this.avgCookieSale,
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour
        }
    }
};


var lima = {
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    location: "lima",
    resultPerHourArr: [],

    getAvgcookiesPerHour: function () {

        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust)
            var totalPerHour = result * this.avgCookieSale,
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour
        }
    }
};


function render(shopObject) {

    var parentElement = document.getElementsByTagName('body');
    var h1 = document.createElement('h1');
    h1.textContent = shopObject.location;
    parentElement.appendchild(h1);
    var ul = document.createElement('ul');
    parentElement.appendchild(ul);


    for (i = 0; i < hoursArr.length; i++) {

        // hoursArr[i] + ':' + shopObject.resultPerHourArr[i]
        // create eleement bl dommun ordered list for each section
        // print value --->


        var li = document.createElement('li');
        li.textContent = housArr[i] + ':' + shopObject.resultPerHourArr[i];
        ul.appendchild(li);






    }

}

var shops = [seattle, tokyo, dubai, paris, lima];
for (var i = 0; i < shops.length; i++) {
    render(shops[i]);
}



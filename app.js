'use strict';

var hoursArr = ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];

function getRandomCustomersNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}


function Branch(passedLocation, passedMinCust, passedMaxCust, passedAvgCookieSale) {

    this.location = passedLocation;
    this.minCust = passedMinCust;
    this.maxCust = passedMaxCust;
    this.avgCookieSale = passedAvgCookieSale;
    this.resultPerHourArr = [];
    this.total = 0;
    // console.log('this.resultPerHourArr  >>>', this.resultPerHourArr )
    this.getAvgcookiesPerHour = function () {

        for (let index = 0; index < hoursArr.length; index++) {
            var result = getRandomCustomersNumber(this.minCust, this.maxCust);
            var totalPerHour = result * parseInt(this.avgCookieSale);
            this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
            this.total = this.total + totalPerHour;

        }



    }



}



var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.getAvgcookiesPerHour();
// console.log('seattle:')
// console.log(seattle);

var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.getAvgcookiesPerHour();
// console.log('tokyo:')
// console.log(tokyo);

var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.getAvgcookiesPerHour();
// console.log(dubai);

var paris = new Branch('Paris', 20, 38, 2.3);
paris.getAvgcookiesPerHour();
// console.log(paris);

var lima = new Branch('Lima', 2, 16, 4.6);
lima.getAvgcookiesPerHour();
// console.log(lima);


Branch.prototype.hourlyTotal = function () {
    var hourlyTotals = [];

    for (let index = 0; index < hoursArr.length; index++) {

        var currentTotal = seattle.resultPerHourArr[i] + tokyo.resultPerHourArr[i] + dubai.resultPerHourArr[i] + paris.resultPerHourArr[i] + lima.resultPerHourArr[i];

        hourlyTotals[i] = currentTotal;


    }

}


var parentElement = document.getElementById('root');
console.log(parentElement);
var h1 = document.createElement('h1');
// console.log(h1);
// console.log(shopObject.location);
h1.textContent = 'Branches';
console.log(h1);
parentElement.appendChild(h1);
var table = document.createElement('table');
parentElement.appendChild(table);




// console.log('end')
Branch.prototype.renderHeader = function () {


    var row1 = document.createElement('tr');
    table.appendChild(row1);
    var headerEmpty = document.createElement('th');
    headerEmpty.textContent = '';
    row1.appendChild(headerEmpty);

    console.log(headerEmpty);

    for (var i = 0; i < hoursArr.length; i++) {


        var tableHeader = document.createElement('th');
        tableHeader.textContent = hoursArr[i];
        // + ':' + shopObject.resultPerHourArr[i];
        row1.appendChild(tableHeader);
        console.log(tableHeader);
    }

    var totalCell = document.createElement('th');

    totalCell.textContent = 'Daily Location Total';
    row1.appendChild(totalCell);

    console.log(totalCell);

    // console.log('end')

}

Branch.prototype.renderRows = function () {

    var row2 = document.createElement('tr');
    table.appendChild(row2);
    var Header2 = document.createElement('th');
    Header2.textContent = this.location;
    row2.appendChild(Header2);

    for (var i = 0; i < hoursArr.length; i++) {

        var tableHeader2 = document.createElement('td');
        tableHeader2.textContent = this.resultPerHourArr[i] ;
        // + ':' + shopObject.resultPerHourArr[i];
        row2.appendChild(tableHeader2);
        console.log(tableHeader2);
    }

    var header2Daily = document.createElement('td');
    header2Daily.textContent = this.total;
    row2.appendChild(header2Daily);
}


// var table = document.createElement('table');
//     article.appendChild(table);

//     var tableFirstRow = document.createElement('tr');
//     table.appendChild(tableFirstRow);

//     var headerOne = document.createElement('th');

//     headerOne.textContent = 'Is good with dogs';
//     tableFirstRow.appendChild(headerOne);


seattle.renderHeader();
// tokyo.renderHeader();

seattle.renderRows();
tokyo.renderRows();
dubai.renderRows();
paris.renderRows();
lima.renderRows();

// var shops = [seattle, tokyo, dubai, paris, lima];
// for (var i = 0; i < shops.length; i++) {
//     console.log(i, shops[i], shops.length)

    // render(shops[i]);
// }









// var seattle = {
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     location: "Seattle",
//     resultPerHourArr: [],

//     getAvgcookiesPerHour: function () {


//         for (let index = 0; index < hoursArr.length; index++) {
//             var result = getRandomCustomersNumber(this.minCust, this.maxCust);
//             var totalPerHour = result * parseInt(this.avgCookieSale);
//             this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
//         }
//     }
// };

// seattle.getAvgcookiesPerHour();

// console.log(seattle)


// var tokyo = {
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     location: "tokyo",
//     resultPerHourArr: [],

//     getAvgcookiesPerHour: function () {


//         for (let index = 0; index < hoursArr.length; index++) {
//             var result = getRandomCustomersNumber(this.minCust, this.maxCust);
//             var totalPerHour = result * parseInt(this.avgCookieSale);
//             this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
//         }
//     }
// };

// tokyo.getAvgcookiesPerHour();


// var dubai = {
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     location: "dubai",
//     resultPerHourArr: [],

//     getAvgcookiesPerHour: function () {


//         for (let index = 0; index < hoursArr.length; index++) {
//             var result = getRandomCustomersNumber(this.minCust, this.maxCust);
//             var totalPerHour = result * parseInt(this.avgCookieSale);
//             this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
//         }
//     }
// };

// dubai.getAvgcookiesPerHour();


// var paris = {
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     location: "paris",
//     resultPerHourArr: [],

//     getAvgcookiesPerHour: function () {

//         for (let index = 0; index < hoursArr.length; index++) {
//             var result = getRandomCustomersNumber(this.minCust, this.maxCust);
//             var totalPerHour = result * parseInt(this.avgCookieSale);
//             this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
//         }
//     }
// };

// paris.getAvgcookiesPerHour();


// var lima = {
//     minCust: 2,
//     maxCust: 16,
//     avgCookieSale: 4.6,
//     location: "lima",
//     resultPerHourArr: [],

//     getAvgcookiesPerHour: function () {

//         for (let index = 0; index < hoursArr.length; index++) {
//             var result = getRandomCustomersNumber(this.minCust, this.maxCust);
//             var totalPerHour = result * parseInt(this.avgCookieSale);
//             console.log(this.resultPerHourArr.length)
//             this.resultPerHourArr[this.resultPerHourArr.length] = totalPerHour;
//         }
//     }
// };

// lima.getAvgcookiesPerHour();

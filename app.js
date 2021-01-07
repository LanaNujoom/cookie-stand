'use strict';

var hoursArr = ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];

var locationArrays = [];

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
    locationArrays.push(this);

}
Branch.prototype.getAvgcookiesPerHour = function () {

    for (let index = 0; index < hoursArr.length; index++) {
        var result = getRandomCustomersNumber(this.minCust, this.maxCust);
        var totalPerHour = result * parseInt(this.avgCookieSale);
        this.total = this.total + totalPerHour;
        this.resultPerHourArr.push(totalPerHour);
    }

}

var seattle = new Branch('Seattle', 23, 65, 6.3);
seattle.getAvgcookiesPerHour();

var tokyo = new Branch('Tokyo', 3, 24, 1.2);
tokyo.getAvgcookiesPerHour();

var dubai = new Branch('Dubai', 11, 38, 3.7);
dubai.getAvgcookiesPerHour();

var paris = new Branch('Paris', 20, 38, 2.3);
paris.getAvgcookiesPerHour();

var lima = new Branch('Lima', 2, 16, 4.6);
lima.getAvgcookiesPerHour();



// RENDER Main 

var parentElement = document.getElementById('root');
var h1 = document.createElement('h1');
h1.textContent = 'Branches';
parentElement.appendChild(h1);
var table = document.createElement('table');
parentElement.appendChild(table);

// RENDER Header

Branch.prototype.renderHeader = function () {


    var row1 = document.createElement('tr');
    table.appendChild(row1);
    var headerEmpty = document.createElement('th');
    headerEmpty.textContent = '';
    row1.appendChild(headerEmpty);

    for (var i = 0; i < hoursArr.length; i++) {

        var tableHeader = document.createElement('th');
        tableHeader.textContent = hoursArr[i];
        row1.appendChild(tableHeader);

    }

    var totalCell = document.createElement('th');

    totalCell.textContent = 'Daily Location Total';
    row1.appendChild(totalCell);


}

// RENDER Rows


Branch.prototype.renderRows = function () {

    var row2 = document.createElement('tr');
    table.appendChild(row2);
    var Header2 = document.createElement('th');
    Header2.textContent = this.location;
    row2.appendChild(Header2);

    for (var i = 0; i < hoursArr.length; i++) {

        var tableHeader2 = document.createElement('td');
        tableHeader2.textContent = this.resultPerHourArr[i];
        row2.appendChild(tableHeader2);

    }

    var header2Daily = document.createElement('td');
    header2Daily.textContent = this.total;
    row2.appendChild(header2Daily);
}


// Calculate Daily Total  & Total of Totals
function totalHours() {

    var row3 = document.createElement('tr');
    table.appendChild(row3);
    var Header3 = document.createElement('th');
    Header3.textContent = 'Totals';
    row3.appendChild(Header3);

    var totalOfTotals = 0;

    for (var i = 0; i < hoursArr.length; i++) {
        var totalLocationPerHour = 0;

        var tableHeader3 = document.createElement('td');
        for (let index = 0; index < locationArrays.length; index++) {
            totalLocationPerHour += locationArrays[index].resultPerHourArr[i];

        }

        tableHeader3.textContent = totalLocationPerHour;

        row3.appendChild(tableHeader3);
        totalOfTotals = totalOfTotals + totalLocationPerHour;


    }

    var tableHeader3 = document.createElement('td');
    tableHeader3.textContent = totalOfTotals;
    row3.appendChild(tableHeader3);
}


// Calling Functions

seattle.renderHeader();

function renderLocations(){
    for (var index = 0; index < locationArrays.length; index++) {

        locationArrays[index].renderRows();
    }
}

renderLocations();


totalHours();

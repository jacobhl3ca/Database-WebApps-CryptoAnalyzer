'use strict';

/* jshint globalstrict: true */
/* global dc,d3,crossfilter,colorbrewer */

var moveChart = dc.lineChart('#monthly-move-chart');

//d3.json('data.json', function(data) {...});
//jQuery.getJson('data.json', function(data){...});
d3.csv('ndx.csv', function (data) { 
	var dateFormat = d3.time.format('%m/%d/%Y');
    var numberFormat = d3.format('.2f');

    data.forEach(function (d) {
        d.dd = dateFormat.parse(d.date);
        d.month = d3.time.month(d.dd); // pre-calculate month for better performance
        d.close = +d.close; // coerce to number
        d.open = +d.open;
    });



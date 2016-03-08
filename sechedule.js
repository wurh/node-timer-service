/*jshint camelcase: false */
'use strict';

var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();　　
var times = [];　　
for (var i = 1; i < 60; i++) {　　　　
	times.push(i);　　
}　　
rule.second = times;　　
var c = 0;　　

/**
 *  每秒执行一次	
 */
var j = schedule.scheduleJob(rule, function() {　　
	c++;　　
	console.log(c);　　
});


/**
 *  每小时的固定分钟，例如：每个小时的42分钟
 */
var rule2 = new schedule.RecurrenceRule();
rule2.minute = 42;
var k = schedule.scheduleJob(rule2, function() {
	console.log('The answer to life, the universe, and everything!');
});

/**
 *  每天上午10:15触发 
 */
var g = schedule.scheduleJob("0 15 10 ? * *", function() {
	console.log('The answer to life, the universe, and everything!');
});
---
layout: post
title: "Fitness Tracker"
description: Tracking my gym activities
headline: 
modified: 2014-08-11 21:06:31 +0600
category: personal
tags: [gym, fitness]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
chart: true
charttype: serial
---
I started going to a gym. I do not workout much, I never have worked out much as a young adult. Now that I have started I thought, it will be a good idea to keep track of my workout, and what better platform can I get other than publishing my day-to-day performance on my own blog.

So I created this excel sheet recording my daily workout routine. This graph is generated using a vb script and is updated regularly.

<div id="chartdiv" style="width: 100%; height: 800px; background-color: #FFFFFF;" ></div>

<script type="text/javascript" src="http://cdn.amcharts.com/lib/3/exporting/amexport.js"></script>
<script type="text/javascript" src="http://cdn.amcharts.com/lib/3/exporting/canvg.js"></script>
<script type="text/javascript" src="http://cdn.amcharts.com/lib/3/exporting/rgbcolor.js"></script>
<script type="text/javascript" src="http://cdn.amcharts.com/lib/3/exporting/filesaver.js"></script>

<!-- amCharts javascript code -->
<script type="text/javascript">
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
			"categoryField": "Excercises",
			"rotate": true,
			"sequencedAnimation": false,
			"startDuration": 1,
			"startEffect": "easeOutSine",
			"categoryAxis": {
				"gridPosition": "start",
				"title": "Excercises"
			},
			"chartCursor": {},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[category]]: [[value]] times",
					"fillAlphas": 1,
					"id": "8/11/2014",
					"title": "8/11/2014",
					"type": "column",
					"valueField": "8/11/2014"
				},
				{
					"balloonText": "[[category]]: [[value]] times",
					"fillAlphas": 1,
					"id": "8/12/2014",
					"title": "8/12/2014",
					"type": "column",
					"valueField": "8/12/2014"
				},
				{
					"balloonText": "[[category]]: [[value]] times",
					"fillAlphas": 1,
					"id": "8/13/2014",
					"title": "8/13/2014",
					"type": "column",
					"valueField": "8/13/2014"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "count",
					"title": "Number of times"
				}
			],
			"allLabels": [],
			"amExport": {
				"buttonTitle": "Download this report",
				"imageFileName": "hmfaysal_fitness_report"
			},
			"balloon": {},
			"legend": {
				"align": "center",
				"useGraphSettings": true,
				"useMarkerColorForLabels": true,
				"useMarkerColorForValues": true
			},
			"titles": [
				{
					"id": "Chart-title",
					"size": 15,
					"text": "Fitness Tracker"
				}
			],
			"dataProvider": [
				{
					"8/11/2014": "10",
					"8/12/2014": "10",
					"8/13/2014": "5",
					"Excercises": "Warm Up(minutes)"
				},
				{
					"8/11/2014": "30",
					"8/12/2014": "30",
					"8/13/2014": "",
					"Excercises": "Side Bend"
				},
				{
					"8/11/2014": "30",
					"8/12/2014": "25",
					"8/13/2014": "20",
					"Excercises": "Ab Crunch"
				},
				{
					"8/11/2014": "25",
					"8/12/2014": "0",
					"8/13/2014": "",
					"Excercises": "Push up"
				},
				{
					"8/11/2014": "24",
					"8/12/2014": "0",
					"8/13/2014": "",
					"Excercises": "Bench Press"
				},
				{
					"8/11/2014": "20",
					"8/12/2014": "20",
					"8/13/2014": "",
					"Excercises": "Stretching"
				},
				{
					"8/11/2014": "20",
					"8/12/2014": "0",
					"8/13/2014": "",
					"Excercises": "Tri-stand"
				},
				{
					"8/11/2014": "30",
					"8/12/2014": "40",
					"8/13/2014": "60",
					"Excercises": "Press Down"
				},
				{
					"8/11/2014": "20",
					"8/12/2014": "20",
					"8/13/2014": "20",
					"Excercises": "Barbell Curl"
				},
				{
					"8/11/2014": "30",
					"8/12/2014": "40",
					"8/13/2014": "40",
					"Excercises": "Standing Mucle Curl"
				},
				{
					"8/11/2014": "20",
					"8/12/2014": "20",
					"8/13/2014": "20",
					"Excercises": "Dumbell Curl"
				},
				{
					"8/11/2014": "20",
					"8/12/2014": "20",
					"8/13/2014": "20",
					"Excercises": "Legs Common"
				},
				{
					"8/11/2014": "30",
					"8/12/2014": "30",
					"8/13/2014": "60",
					"Excercises": "Leg Press"
				}
			]
		}
	);
</script>

The chart may change its appearance in the coming days depending on my workout plan.
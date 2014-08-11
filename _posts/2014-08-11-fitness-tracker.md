---
layout: post
title: "Fitness Tracker"
description: Tracking m gym activities
headline: 
modified: 2014-08-11 21:06:31 +0600
category: personal
tags: [gym, fitness]
imagefeature: 
mathjax: 
chart: 
comments: true
featured: true
chart: true
charttype: serial
---
I started going to a gym. I do not workout much, I never have worked out much as a young adult. Now that I have started I thought, it will be a good idea to keep track of my workout, and what better platform can I get other than publishing my day-to-day performance on my own blog.

So I created this excel sheet recording my daily workout routine. This graph is generated using a vb script and is updated regularly.

<div id="chartdiv" style="width: 100%; height: 800px; background-color: #FFFFFF;" ></div>

<script type="text/javascript">
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
			"categoryField": "category",
			"rotate": true,
			"angle": 30,
			"depth3D": 6,
			"sequencedAnimation": false,
			"startDuration": 1,
			"startEffect": "easeOutSine",
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "8/11/2014",
					"title": "8/11/2014",
					"type": "column",
					"valueField": "8/11/2014"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": ""
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"useGraphSettings": true
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 15,
					"text": "Fitness Tracker"
				}
			],
			"dataProvider": [
				{
					"category": "Warm Up(minutes)",
					"8/11/2014": "10"
				},
				{
					"category": "Side Bend",
					"8/11/2014": "30"
				},
				{
					"category": "Ab Crunch",
					"8/11/2014": "30"
				},
				{
					"category": "Push up",
					"8/11/2014": "25"
				},
				{
					"category": "Bench Press",
					"8/11/2014": "24"
				},
				{
					"category": "Stretching",
					"8/11/2014": "20"
				},
				{
					"category": "Tri-stand",
					"8/11/2014": "20"
				},
				{
					"category": "Press Down",
					"8/11/2014": "10"
				},
				{
					"category": "Barbell Curl",
					"8/11/2014": "20"
				},
				{
					"category": "Standing Mucle Curl",
					"8/11/2014": "30"
				},
				{
					"category": "Dumbell Curl",
					"8/11/2014": "20"
				},
				{
					"category": "Legs Common",
					"8/11/2014": "20"
				},
				{
					"category": "Leg Press",
					"8/11/2014": "30"
				}
			]
		}
	);
</script>

The chart may change its appearance in the coming days depending on my workout plan.
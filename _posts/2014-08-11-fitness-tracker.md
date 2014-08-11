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

<!-- amCharts javascript code -->
<script type="text/javascript">
	AmCharts.makeChart("chartdiv",
		{
			"type": "serial",
			"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
			"categoryField": "category",
			"columnWidth": 0.54,
			"rotate": true,
			"startDuration": 1,
			"startEffect": "easeOutSine",
			"categoryAxis": {
				"gridPosition": "start",
				"title": "Excercises",
				"titleFontSize": 10
			},
			"chartCursor": {},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[value]] times",
					"fillAlphas": 1,
					"id": "8/11/2014",
					"title": "8/11/2014",
					"type": "column",
					"valueAxis": "ValueAxis-1",
					"valueField": "column-1"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"stackType": "regular",
					"title": "Number of times"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"useGraphSettings": true
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
					"category": "Warm Up(minutes)",
					"column-1": "10"
				},
				{
					"category": "Side Bend",
					"column-1": "30"
				},
				{
					"category": "Ab Crunch",
					"column-1": "30"
				},
				{
					"category": "Push up",
					"column-1": "25"
				},
				{
					"category": "Bench Press",
					"column-1": "24"
				},
				{
					"category": "Stretching",
					"column-1": "20"
				},
				{
					"category": "Tri-stand",
					"column-1": "20"
				},
				{
					"category": "Press Down",
					"column-1": "10"
				},
				{
					"category": "Barbell Curl",
					"column-1": "20"
				},
				{
					"category": "Standing Mucle Curl",
					"column-1": "30"
				},
				{
					"category": "Dumbell Curl",
					"column-1": "20"
				},
				{
					"category": "Legs Common",
					"column-1": "20"
				},
				{
					"category": "Leg Press",
					"column-1": "30"
				}
			]
		}
	);
</script>

The chart may change its appearance in the coming days depending on my workout plan.
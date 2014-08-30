---
layout: post
published: false
title: "Jekyll Estimated Reading Time: Liquid, no plugins"
mathjax: false
featured: false
comments: true
chart: false
description: Implementing Medium inspired Estimated Reading Time (ERT) Calculator on Github Pages with Jekyll
categories: 
  - webdevelopment
tags: jekyll reading time
---

The first time I discovered Medium, I fell in love with its Estimated Reading Time (ERT) feature. It helps bring in the right audience to the right article. The idea behind of this is, maybe it’s early in the morning, you’re in the mood of reading something terse while you get prepared for work, and at dawn, you’re back at home and you just want to curl up on the couch and gorge in a long essay. The ERT helps you find the right article, for the right time.

So with that in mind, I looked on the internet if someone has already made a code-snippet for this. Sure enough, I found a Jekyll plugin that does it right. Have a look at this [Jekyll Estimated Reading Times Plugin](http://51bits.com/writing/estimated-reading-times-in-jekyll/) by 51bits. But the problem was, I was and currently am hosting with GitHub pages, which does not allow external plugins. So I wrote my own code in Liquid.

First of all, lets make a switch for the Estimated Reading Time feature, so that you can turn on/off the feature anytime you like. Put these two lines in your `_config.yml` file.

{% highlight %}
# Read Time is a calculator tp provide post read-time based on word count. Usage is recommended.
readtime:         true
wpm:			  200
{% endhighlight %}

`readtime` acts as a switch to turn on/off the ERT feature sitewide. `wpm` is used for specifying the average words-per-minute your viewers can read.

Then the calculator for the blog index page:

{% highlight ruby %}
{% raw %}
  {% if site.readtime %}
  {% for post in site.posts %}
  	{% assign readtime = post.content | strip_html | number_of_words | append: '.0' | divided_by:site.wpm %}
  {% endfor %}
{% endif %}
{% endraw %}
{% endhighlight %}

The calculator does not display anything on your page, it just calculates the reading times for each post in your blog and holds it in the RAM. Place the code anywhere before you call `{{ readtime }}` in the page to actually display the calculated results.

But before displaying the data lets make the code better. Lets give the calculator a fallback option if you did not specify or forgot to specify a wpm value in the `_config.yml` file.

{% highlight ruby %}
{% raw %}
{% if site.readtime %}
  {% for post in site.posts %}
    {% if site.wpm %}
      {% assign readtime = post.content | strip_html | number_of_words | append: '.0' | divided_by:site.wpm %}
    {% else %}
      {% assign readtime = post.content | strip_html | number_of_words | append: '.0' | divided_by:180 %}
    {% endif %}
  {% endfor %}
{% endif %}
{% endraw %}
{% endhighlight %}

To display the Estimated Reading Time for each post, 

With the update of Jekyll 2.2.0, 

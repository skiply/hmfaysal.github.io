---
layout: post
published: false
title: Featured Posts in Jekyll
mathjax: false
featured: false
comments: true
chart: false
description: Grabbing Attention to your most beloved articles
categories: 
  - webdevelopment
tags: jekyll featured
---

If you are an avid blogger, there must be some writings that you value dearly and you might want your blog visitors to notice those posts in the blog index. The simplest way to achieve this attention to a few great posts is to feature those posts with visible markers and indexing those in a special page.

I do it simply by putting a statement in the post matter YAML.
```
featured: true
```
Then I use the post.featured YAML statement to append visible markers to the featured posts in the blog index. You can do this a variety of ways depending on your theme CSS.
For me, I simply put a if command in the site.posts loop to find out the featured posts.
```
{% raw %}
{% for post in paginator.posts %}
	{% if post.featured %}Put some content{% endif %}
{% endfor %}
{% endraw %}
```
The most important part of the process is to inde
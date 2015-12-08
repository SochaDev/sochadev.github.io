---
title: Executive Summary
description: Here's everything your boss or board could ever want to know about us.
layout: print
---

## Executive Summary

Socha Dev is a white-label web and app development shop built to help your team
succeed. We specialize in overflow, triage and problem solving services. We work
in the development phase of projects \-- you give us your strategy, designs,
requirements, API docs and any other pertinents \-- we turn it all in to a
beautiful, fully functioning application.

## History & Successes

Socha Dev was born in early 2011 when principal Jason Socha realized that the
development community needed a reliable, expert A-Team to turn to in times of
need. We\'ve worked with some of the best & brightest dev teams in the nation to
help plan and execute successful projects, be they web sites, web applications,
APIs, or other. A lot of these systems have been heavy on Drupal for the past
few years and many of our staff have attained high levels of Drupal expertise.

* [Visit {{ site.baseurl | replace: 'http://', '' }}]({{ site.baseurl }}/)
* [Find us on GitHub]({{ site.githubUrl }})
* [Find us on Drupal.org]({{ site.drupalUrl }})

* * *

## [Case Studies]({{ site.baseurl }}#projects)

A few happy clients include The Chronicle of Higher Education, Discovery
Communications, RepEquity, Interactive Strategies, IWS, and Seabourne. There
are more, but as a white-label dev shop, it\'s sometimes against the rules to
tell you about them!

{% for project in site.data.projects %}
  {% if project.whiteLabel != true %}
### {{ project.name }}
{{ project.description | replace: '\n', ' ' }}
  {% endif %}
{% endfor %}

* * *

## [Team Members]({{ site.baseurl }}/team)

{% for person in site.data.team %}
### {{ person.name }}
{{ person.description }}
{% endfor %}

* * *

## Workflow

{% capture tools %}
{% include tools.html %}
{% endcapture %}
{{ tools | strip_html | strip_newlines }}

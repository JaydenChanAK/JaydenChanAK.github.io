---
layout: page
title: artificial intelligence
permalink: /artificial_intelligence/
description:
nav: true
nav_order: 3
dropdown: true
children:
  - title: Sentiment Analysis for Stock Market Trend Prediction
    permalink: /projects/artificial intelligence/sentiment_analysis/
  - title: divider
  - title: Aircraft Identification Tool
    permalink: /projects/artificial intelligence/aircraft_identification_tool/
  - title: divider
  - title: Heart Disease Prediction Tool
    permalink: /projects/artificial intelligence/heart_disease_prediction_tool/
  - title: divider
  - title: Regression and Classification
    permalink: /projects/artificial intelligence/regression_and_classification/
  - title: divider
  - title: All AI Projects
    permalink: /artificial_intelligence/
display_categories: [artificial intelligence]
horizontal: false
---

<!-- pages/artificial_intelligence.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- Display projects without categories -->
{% assign sorted_projects = site.projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>

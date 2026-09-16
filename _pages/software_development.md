---
layout: page
title: software development
permalink: /software_development/
description:
nav: true
nav_order: 4
dropdown: true
children:
  - title: Hangout
    permalink: /projects/software development/hangout/
  - title: divider
  - title: YouTube Wrapped
    permalink: /projects/software development/yt_wrapped/
  - title: divider
  - title: Rate My TOS
    permalink: /projects/software development/rate_my_tos/
  - title: divider
  - title: All Software Projects
    permalink: /software_development/
display_categories: [software development]
horizontal: false
---

<!-- pages/software_development.md -->
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

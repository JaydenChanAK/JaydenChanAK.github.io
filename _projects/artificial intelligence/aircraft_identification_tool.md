---
layout: page
title: Aircraft Identification Tool
description: <u><b>Computer Vision Developer</b></u> <br/>
  ML pipeline and model to classify aircraft. <br/>
  <i>January - February 2025</i>
img:
importance: 2
category: artificial intelligence
related_publications: false
---

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/aircraft_identification_tool.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/aircraft_identification_tool.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
{% jupyter_notebook jupyter_path %}
{% else %}

  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

---
layout: page
title: Regression and Classification
description:
    <u><b>Machine Learning Developer</b></u> <br/> 
    Regression and classification models. <br/> 
    <i>April - May 2024</i>
img:
importance: 4
category: artificial intelligence
related_publications: false
---

## Linear Regression

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/linear_regression_model.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/linear_regression_model.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

## Logistic Regression

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/logistic_regression_model.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/logistic_regression_model.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

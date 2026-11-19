---
layout: page
title: Sentiment Analysis for Stock Market Trend Prediction
description: >
  <u><b>Sentiment Pipeline Developer</b></u> <br/>
  Team research project testing whether tweet sentiment helps predict stock direction. <br/>
  <i>August 2026 - November 2026</i>
img:
importance: 1
category: artificial intelligence
related_publications: false
---

A graduate team project (seven members) studying whether social media sentiment improves stock direction prediction over price data alone, at 1-, 5-, and 20-trading-day horizons. I built the sentiment side of the study: scoring 80,793 tweets with FinBERT, turning them into leakage-safe daily signals aligned to the trading calendar, and training a sentiment-only model whose predictions fed the team's combined price + sentiment models.

## Data

- **80,793 tweets** about 25 stocks (Kaggle, September 2021 – September 2022)
- **Daily prices** from yfinance
- Modeling used the 10 most-tweeted tickers: TSLA, TSM, AAPL, AMZN, MSFT, PG, NIO, META, AMD, and NFLX

## My role

I owned the **sentiment pipeline** and the **sentiment-only model** end to end.

- **FinBERT scoring.** Cleaned the tweets (URLs, @mentions, HTML entities) and scored all ~80k in batches with FinBERT (`ProsusAI/finbert`), producing positive, negative, and neutral probabilities plus a signed score (positive − negative).
- **Leakage-safe daily aggregation.** Mapped each tweet to the first trading day it could actually influence, using the 4 PM ET close and the real trading calendar (daylight saving and market holidays included). Aggregated to one row per stock per trading day (mean sentiment and tweet count), with no-tweet days filled.
- **Sentiment-only model.** Features were daily signed sentiment, its 5- and 20-day trailing averages, and log tweet volume. Compared logistic regression, ridge, random forest, and an MLP against two baselines. I reused the team's labels and chronological train/validation/test split (with 20-trading-day gaps to prevent label leakage), so every model was evaluated on identical examples.
- **Hand-off to the fusion models.** Exported per-example validation and test probabilities (date, ticker, horizon, split, label, `p_up`, forward return, target date, and as-of timestamp) in a shared format that the teammates building the combined models used for fusion.
- **Evaluation rigor.** Found that the test period was a falling market: only 19–38% of examples went up, so always guessing "down" scored 62–81% accuracy. I pushed the team to report balanced accuracy and Brier score consistently across every section, and to separate two different "always down" baselines that had been conflated.

## Team contributions

Co-authored by the team, not my individual work:

- A tuned **price-only model**: 8 model types including GRU and LSTM, selected by validation R² with an overfitting check
- **Combined models**: weighted probability blending, logistic stacking, feature-level fusion, and a two-branch GRU + MLP network

## Results

- **Sentiment alone did not reliably beat simple baselines.** Test balanced accuracy was about 50% at the 1- and 5-day horizons, and an apparent 20-day improvement was not confirmed on validation.
- **Combining sentiment with price did not show a stable improvement** over price alone either.
- **Takeaway: a careful negative result.** With one year of data and an imbalanced test period, social media sentiment added little measurable predictive value, and naive accuracy would have overstated every model.

## Tech stack

Python, PyTorch, Hugging Face Transformers (FinBERT), scikit-learn, pandas, NumPy, yfinance, Git/GitHub

**Skills:** NLP and transformer inference at scale · time-series data engineering · preventing look-ahead bias and leakage · evaluation under class imbalance · cross-team interfaces in a shared ML pipeline

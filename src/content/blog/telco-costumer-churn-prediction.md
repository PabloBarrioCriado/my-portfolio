---
title: "Telco-costumer-churn-prediction"
description: "Consistency beats intensity. Here is a simple framework for designing a weekly routine that survives real life."
pubDate: 2026-10-08
tags: ["training", "habits", "beginner"]
---

This project goes beyond standard predictive modeling by implementing a Prescriptive Analytics System to predict telecommunications customer churn and automatically recommend targeted retention strategies.

### 🎯 The Business Problem
In the telecom sector, predicting *who* is going to leave is only half the battle. The sales team needs to know *what to do* to stop it. The objective was to build a system that bridges the gap between machine learning predictions and actionable business decisions.

### 🛠️ Technical Approach
- **Languages:** Python
- **Machine Learning:** LightGBM, XGBoost, Random Forest, SVM, Logistic Regression, KNN.
- **Deep Learning:** PyTorch (optimized with Optuna)
- **Methodology:** Feature Engineering (Granular vs. Aggregated variables), Model Evaluation (AUC & F1 with 95% CI), Prescriptive Analytics

### 📊 Key Features & Results
- Conducted a rigorous evaluation of 14 different modeling strategies, comparing tree-based algorithms, deep learning, and baseline models.
- Achieved top predictive performance using **LightGBM and XGBoost** on granular variables, reaching an **AUC of 0.845** and F1 scores of ~0.628.
- Successfully optimized a PyTorch Multilayer Perceptron (MLP) using Optuna, proving the viability of Deep Learning for this tabular data problem.
- Translated these high-accuracy predictions into automated, personalized retention strategies for the sales team.

---
🔗 [View Source Code on GitHub](https://github.com/PabloBarrioCriado/telco-customer-churn-prediction)
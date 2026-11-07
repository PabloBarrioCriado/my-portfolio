---
title: "Life Expectancy ML Prediction"
description: "An end-to-end Machine Learning pipeline to identify key health predictors and forecast global life expectancy."
pubDate: 2026-06-13
tags: ["machine-learning", "regression", "xgboost", "eda", "python"]
---

This project explores global life expectancy using exploratory data analysis (EDA) and machine learning techniques to understand the key factors that influence population health outcomes and to build predictive models. 

### 🎯 The Objective
The main objective is to identify the most relevant predictors of life expectancy and evaluate different regression models in terms of predictive performance and generalization capability.

### 🛠️ Technical Approach
- **Languages:** Python
- **Libraries:** Pandas, NumPy, Matplotlib, Seaborn
- **Machine Learning:** Scikit-learn, XGBoost
- **Models Implemented:** Ridge Regression, KNN, SVR, Random Forest Regressor, XGBoost Regressor

### 📊 Key Insights & Results
- **Strong Explanatory Power:** Achieved an $R^2$ close to 0.90 through nonlinear ensemble models, which significantly outperformed linear approaches.
- **Real-World Applicability:** When evaluated on completely unseen country data, the model predicted life expectancy within a highly practical error margin of **±2.5 years** for approximately 70% of the tested countries.
- **Top Predictors Identified:** The analysis revealed that HIV/AIDS prevalence and adult mortality rates were the strongest predictors of life expectancy globally.

### 🚀 Future Improvements
- Implement **SHAP values** for advanced model explainability and interpretability.
- Experiment with further advanced boosting algorithms (LightGBM, CatBoost) and Bayesian optimization for hyperparameter tuning.
- Expand feature engineering to capture deeper nonlinear socioeconomic relationships.

---
🔗 [View Source Code on GitHub](https://github.com/PabloBarrioCriado/life-expectancy-ml)
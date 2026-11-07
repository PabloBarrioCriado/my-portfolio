---
title: "Telco Customer Churn Predictor & Retention Engine"
description: "A full-stack Machine Learning application for predicting customer churn and generating automated retention strategies using advanced modeling."
pubDate: 2026-07-11
tags: ["machine-learning", "deep-learning", "python", "optuna", "prescriptive-analytics"]
---


This project goes beyond standard predictive modeling by implementing a **Prescriptive Analytics System**. It is a full-stack Machine Learning application designed to predict customer churn in a telecommunications company and, more importantly, automatically recommend targeted retention strategies for the sales team.

[👉 **Try the Live Streamlit App Here**](https://telco-customer-churn-prediction-pablobarriocriado.streamlit.app/)

### 💡 Business Value: The Retention Engine
Predicting a customer leaving is only half the battle. This project includes a custom business logic engine that prescribes **Next Best Actions (NBA)** based on specific user profiles:
- **Contract Upgrade Tactics:** Offers targeted discounts for high-risk, month-to-month customers.
- **Price Optimization:** Flags high-billing users for service audits to prevent price-based churn.
- **Value-Added Loyalty:** Automatically suggests tech support promotions, driven by the statistical insight that customers with active technical assistance have significantly higher retention rates.

### 🧠 Technical Architecture & Rigor
Built with a strict focus on statistical rigor and software engineering best practices:
- **Nested Cross-Validation:** Rigorously selected the best algorithms without data leakage, avoiding the common pitfalls of a simple `train_test_split`.
- **Optimal Decision Threshold:** Instead of defaulting to a 0.5 probability, the decision boundary was mathematically optimized using **Youden's J Statistic (0.48)** to balance Sensitivity and Specificity.
- **Custom Scikit-Learn Transformers:** Built object-oriented transformers (`BaseEstimator`, `TransformerMixin`) integrated into a robust pipeline (`ServiceAggregator`) to automate data preprocessing.
- **Safe Memory Management:** Implemented runtime monkey-patching to handle specific serialization incompatibilities between strict NumPy versions and Scikit-learn categorical encoders.

### 🛠️ Technology Stack
- **Machine Learning:** Scikit-learn, SciPy, XGBoost, LightGBM
- **Data & Viz:** Pandas, NumPy, Matplotlib, Seaborn
- **Deployment & Eng:** Streamlit, Joblib, Custom OOP Transformers

---
🔗 [View Source Code on GitHub](https://github.com/PabloBarrioCriado/telco-customer-churn-prediction) | 📊 [View Executive Presentation](https://github.com/PabloBarrioCriado/telco-customer-churn-prediction/blob/main/Pablo%20Barrio%20Criado.pdf) 🔗 [Try the Live Streamlit App Here](https://telco-customer-churn-prediction-pablobarriocriado.streamlit.app/) 
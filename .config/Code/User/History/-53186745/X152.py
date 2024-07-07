#%%
from my_data import get_traing_and_testing_data
from sklearn.linear_model import Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Load data
X_train, X_test, y_train, y_test, X, y = get_traing_and_testing_data()

# Ridge Regression
ridge_model = Ridge(alpha=1.0)  # You can adjust the regularization strength by changing the alpha parameter
ridge_model.fit(X_train, y_train)
y_ridge_pred = ridge_model.predict(X_test)

# Lasso Regression
lasso_model = Lasso(alpha=1.0)  # You can adjust the regularization strength by changing the alpha parameter
lasso_model.fit(X_train, y_train)
y_lasso_pred = lasso_model.predict(X_test)

# Evaluation
def evaluate_model(y_true, y_pred, model_name):
    mse = mean_squared_error(y_true, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_true, y_pred)
    print(f"{model_name} - Mean Squared Error (MSE): {mse}")
    print(f"{model_name} - Root Mean Squared Error (RMSE): {rmse}")
    print(f"{model_name} - R-squared (R2): {r2}")

evaluate_model(y_test, y_ridge_pred, "Ridge Regression")
print()
evaluate_model(y_test, y_lasso_pred, "Lasso Regression")


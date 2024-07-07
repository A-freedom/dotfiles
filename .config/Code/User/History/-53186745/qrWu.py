# %%
from my_data import get_traing_and_testing_data
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
from my_tools import evaluate_and_plot

X_train, X_test, y_train, y_test, X, y = get_traing_and_testing_data()

# Create polynomial features
poly_features = PolynomialFeatures(degree=2)
X_train_poly = poly_features.fit_transform(X_train)
X_test_poly = poly_features.transform(X_test)

# Fit a linear regression model
model = LinearRegression()
model.fit(X_train_poly, y_train)

# Make predictions on training and testing data
y_train_pred = model.predict(X_train_poly)
y_test_pred = model.predict(X_test_poly)

# Evaluate the model
train_mse = mean_squared_error(y_train, y_train_pred)
test_mse = mean_squared_error(y_test, y_test_pred)

train_rmse = np.sqrt(train_mse)
test_rmse = np.sqrt(test_mse)

train_r2 = r2_score(y_train, y_train_pred)
test_r2 = r2_score(y_test, y_test_pred)

print("Training Mean Squared Error (MSE):", train_mse)
print("Testing Mean Squared Error (MSE):", test_mse)
print("Training Root Mean Squared Error (RMSE):", train_rmse)
print("Testing Root Mean Squared Error (RMSE):", test_rmse)
print("Training R-squared (R2):", train_r2)
print("Testing R-squared (R2):", test_r2)

def evaluate_and_plot(X, y, model, data_description):

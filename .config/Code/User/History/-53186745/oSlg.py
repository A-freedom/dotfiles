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
    # Predictions
    X = poly_features.fit_transform(X)
    y_predictions = model.predict(X)

    # Linear regression
    # reg = LinearRegression().fit(y.reshape(-1, 1), y_predications)
    # slope = reg.coef_[0]
    # intercept = reg.intercept_

    # Scatter plot
    plot.scatter(y, y_predictions, marker='o', s=5)

    # Plot the regression line
    # plt.plot(y, slope*y + intercept, color='red', linestyle='-', linewidth=1)

    # Equation of the line
    # equation = f'y = {slope:.2f}x + {intercept:.2f}'
    # plt.text(0.5, 0.1, equation, fontsize=12, transform=plt.gca().transAxes)

    # Labels and title
    plot.xlabel(data_description)
    plot.ylabel('Prediction')
    plot.title(data_description + " vs Predictions")

    # Adjust plot limits
    min_val = min(np.min(y), np.min(y_predictions))
    max_val = max(np.max(y), np.max(y_predictions))
    plot.xlim(min_val, max_val)
    plot.ylim(min_val, max_val)
    plot.show()

    # Calculate errors
    errors = (y_predictions - y) / y * 100
    df_error = pd.DataFrame({"error statistics": errors})
    
    
    sns.kdeplot(df_error.sort_values("error statistics"), fill=True)
    plot.gca().set_title("error distrubation for" + data_description)
    plot.show()

    print(df_error.describe())
    # Calculate the Pearson correlation coefficient
    r = np.corrcoef(y, y_predictions)[0, 1]
    print("r   ", r)
    # Calculate the mse
    mse = np.mean(np.square(y - y_predictions))
    print("mes  ",mse)
#%%
from my_data import get_traing_and_testing_data
from sklearn.neighbors import KNeighborsRegressor
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Load data
X_train, X_test, y_train, y_test, X, y = get_traing_and_testing_data()

# Create and fit KNN regressor
knn_regressor = KNeighborsRegressor(n_neighbors=5)  # You can change the number of neighbors
knn_regressor.fit(X_train, y_train)

def evaluate_and_plot_knn(X, y, model, data_description):
    # Predictions
    y_predictions = model.predict(X)

    # Scatter plot
    plt.scatter(y, y_predictions, marker='o', s=5)

    # Labels and title
    plt.xlabel(data_description)
    plt.ylabel('Prediction')
    plt.title(data_description + " vs Predictions")

    # Adjust plot limits
    min_val = min(np.min(y), np.min(y_predictions))
    max_val = max(np.max(y), np.max(y_predictions))
    plt.xlim(min_val, max_val)
    plt.ylim(min_val, max_val)
    plt.show()

    # Calculate errors
    errors = (y_predictions - y) / y * 100
    df_error = pd.DataFrame({"error statistics": errors})
    
    sns.kdeplot(df_error.sort_values("error statistics"), fill=True)
    plt.gca().set_title("Error distribution for " + data_description)
    plt.show()

    print(df_error.describe())
    
    # Calculate the Pearson correlation coefficient
    r = np.corrcoef(y, y_predictions)[0, 1]
    print("Pearson correlation coefficient (r):", r)
    
    # Calculate the mean squared error (MSE)
    mse = mean_squared_error(y, y_predictions)
    print("Mean Squared Error (MSE):", mse)

evaluate_and_plot_knn(X_test, y_test, knn_regressor, "Testing data")
evaluate_and_plot_knn(X, y, knn_regressor, "All data")

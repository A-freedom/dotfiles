#%%
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
from my_data import get_traing_and_testing_data
from sklearn.metrics import mean_squared_error
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Load data
X_train, X_test, y_train, y_test, X, y = get_traing_and_testing_data()

# Create a simple feedforward neural network model
model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dense(32, activation='relu'),
    Dense(1)  # Output layer with 1 neuron for regression
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
history = model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2, verbose=0)

# Evaluate the model on test data
y_test_pred = model.predict(X_test)

# Calculate Mean Squared Error
test_mse = mean_squared_error(y_test, y_test_pred)
print("Test Mean Squared Error (MSE):", test_mse)

# Plot training history
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.show()

# Plot predictions vs. actuals
plt.scatter(y_test, y_test_pred, marker='o', s=5)
plt.xlabel('Actual')
plt.ylabel('Predicted')
plt.title('Actual vs. Predicted')
plt.show()

# Error distribution
errors = ((y_test_pred - y_test) / y_test) * 100
sns.kdeplot(errors, fill=True)
plt.title('Error Distribution')
plt.xlabel('Percentage Error')
plt.ylabel('Density')
plt.show()

# Summary of error statistics
df_errors = pd.DataFrame({'Percentage Error': errors.squeeze()})
print(df_errors.describe())

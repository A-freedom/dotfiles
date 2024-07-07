import os
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, TensorBoard
import time

# Load the dataset
df = pd.read_csv('database.csv', header=0)

X = df[['shap', 'h', 't', 'l', 'fy', 'fc', 'et', 'eb', 'A']]
y = df['n']

# Scale features and target variable to [0, 1]
scaler = MinMaxScaler(feature_range=(0, 1))
X = scaler.fit_transform(X)
y = scaler.fit_transform(y.values.reshape(-1, 1))


# Scale the target variable to [-1, 1] # I may try this later
# y = y * 2 - 1

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.05)

model = tf.keras.Sequential([
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(1)  # Output layer for regression
])

# Compile the model
custom_optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
model.compile(optimizer=custom_optimizer, loss='mean_squared_error', metrics=["mae"])

# Early stopping callback
early_stopping = EarlyStopping(monitor='val_mae', patience=500, restore_best_weights=True)

# Model checkpoint callback
checkpoint = ModelCheckpoint("best_model.h5", save_best_only=True)

# TensorBoard callback for profiling
tensorboard = TensorBoard(log_dir="logs/")

# Record the start time
start_time = time.time()

# Train the model
model.fit(X_train, y_train, epochs=3000, batch_size=1000, verbose=2, validation_split=0.1, callbacks=[early_stopping, checkpoint, tensorboard])

# Record the start time
end_time = time.time()

# Calculate the training time
training_time = end_time - start_time
print("Training time:", training_time, "seconds")

# Evaluate the model
loss, mae = model.evaluate(X_train, y_train)
print("Train Loss:", loss, "Train MAE:", mae)

loss, mae = model.evaluate(X_test, y_test)
print("Test Loss:", loss, "Test MAE:", mae)

# Save the model
model.save('my_model')

# Make predictions
y_pre = model.predict(X_test)
y_pre = [i[0] for i in y_pre]

# Calculate and save errors
error = (y_test - y_pre) / y_test * 100
error_df = pd.DataFrame({'Error': error[0]})

# Sort the DataFrame by the 'Error' column
error_df = error_df.sort_values(by='Error')

# Save the sorted DataFrame to a CSV file
error_df.to_csv('error.csv', index=False)
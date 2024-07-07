# %%
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, TensorBoard
import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

# %%
# Load the dataset
df = pd.read_csv('database.csv', header=0)


# %%
X = df[['b','h','t','l','fy','Fc']]
y = df['Ntest']

# %%
# Scale features and target variable to [0, 1]
scaler = MinMaxScaler(feature_range=(-1, 1))
X = scaler.fit_transform(X)
y = scaler.fit_transform(y.values.reshape(-1, 1))

# %%
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1)

# %%
model = tf.keras.Sequential([
    tf.keras.layers.Dense(20, activation='tanh'),
    # tf.keras.layers.Dense(15, activation='tanh'),
    tf.keras.layers.Dense(20, activation='tanh'),
    tf.keras.layers.Dense(1, activation='tanh')  # Output layer for regression
])

# %%
# Compile the model
custom_optimizer = tf.keras.optimizers.Adam(learning_rate=0.1)
model.compile(optimizer=custom_optimizer, loss='mean_squared_error', metrics=["mean_absolute_percentage_error"])

# %%
# Early stopping callback
early_stopping = EarlyStopping(monitor='val_mean_absolute_percentage_error', patience=5000, restore_best_weights=True)
# Model checkpoint callback
checkpoint = ModelCheckpoint("best_model.h5", save_best_only=True)
# TensorBoard callback for profiling
tensorboard = TensorBoard(log_dir="logs/")


# %%
# Train the model
model.fit(X_train, y_train, epochs=500000, batch_size=500, verbose=2, validation_split=0.1, callbacks=[early_stopping, checkpoint, tensorboard])


# %%
# Evaluate the model
print("TRANING DATA")
loss, mae = model.evaluate(X_train, y_train)
# print("Train Loss:", loss, "Train MAE:", mae)
print("TESTING DATA")
loss, mae = model.evaluate(X_test, y_test)
# print("Test Loss:", loss, "Test MAE:", mae)

# %%
# Save the model
model.save('my_model')

# %%
# Make predictions
y_pre = pd.DataFrame(model.predict(X_test))

# Calculate and save errors
error = (y_test - y_pre) / y_test * 100
error = error.sort_values(by=0)
error.to_csv('error.csv',index=False)

# %%

# %%
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, TensorBoard
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

# %%
# Load the dataset
df = pd.read_csv('database.csv', header=0)


# %%
X = df[['b','h','t','l','fy','Fc']]
y = df['Ntest']

# %%
# Scale features and target variable to [0, 1]
scaler = MinMaxScaler(feature_range=(0, 1))
X = scaler.fit_transform(X)
y = scaler.fit_transform(y.values.reshape(-1, 1))

# %%
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.05)

# %%
model = tf.keras.Sequential([
    tf.keras.layers.Dense(20, activation='sigmoid'),
    # tf.keras.layers.Dense(20, activation='tanh'),
    tf.keras.layers.Dense(20, activation='sigmoid'),
    tf.keras.layers.Dense(6, activation='sigmoid'),

    tf.keras.layers.Dense(1,activation='sigmoid')  # Output layer for regression
])


# %%
# Compile the model
custom_optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
model.compile(optimizer=custom_optimizer, loss='mean_squared_error', metrics=["mean_absolute_percentage_error"])

# %%
# Early stopping callback
early_stopping = EarlyStopping(monitor='val_mean_absolute_percentage_error', patience=500, restore_best_weights=True)
# Model checkpoint callback
checkpoint = ModelCheckpoint("best_model.h5", save_best_only=True)
# TensorBoard callback for profiling
tensorboard = TensorBoard(log_dir="logs/")


# %%
# Train the model
model.fit(X_train, y_train, epochs=500000, batch_size=5000, verbose=2, validation_split=0.1, callbacks=[early_stopping, checkpoint, tensorboard])


# %%
# Evaluate the model
loss, mae = model.evaluate(X_train, y_train)
print("Train Loss:", loss, "Train MAE:", mae)

loss, mae = model.evaluate(X_test, y_test)
print("Test Loss:", loss, "Test MAE:", mae)

# %%
# Save the model
model.save('my_model')

# %%



# Make predictions
y_pre = model.predict(X_test)
y_pre = [i[0] for i in y_pre]

# Calculate and save errors
# error = (y_test - y_pre) / y_test * 100
# error = error.sort_values()
# error.to_csv('error.csv', index=False)

# %%
y_test

# %%
y_pre

# %%




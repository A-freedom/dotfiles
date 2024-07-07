import tensorflow as tf

# Create your model
model = tf.keras.Sequential()
# Add layers to your model (e.g., Dense, Conv2D, etc.)

# Compile the model with predefined metrics
model.compile(optimizer='adam', loss='mse', metrics=['mae', 'mse'])

# Train and evaluate your model
# ...
